import os
import joblib
import numpy as np

def load_models():
    BASE_DIR = os.path.dirname(__file__)
    MODEL_DIR = os.path.join(BASE_DIR, "models")

    def safe_load(name):
        path = os.path.join(MODEL_DIR, name)
        if os.path.exists(path):
            return joblib.load(path)
        else:
            print(f"⚠️ Model missing: {path}")
            return None  # Return None if model not found

    models = {
        "AND": safe_load("and_gate_slp.pkl"),
        "OR": safe_load("or_gate_slp.pkl"),
        "NOT": safe_load("not_gate_slp.pkl"),
        "NAND": safe_load("nand_gate_slp.pkl"),
        "NOR": safe_load("nor_gate_slp.pkl"),
        "XOR": safe_load("xor_gate_mlp.pkl"),
        "XNOR": safe_load("xnor_gate_mlp.pkl"),
        "FULL_ADDER_SUM": safe_load("full_adder_sum_mlp.pkl"),
        "FULL_ADDER_CARRY": safe_load("full_adder_carry_mlp.pkl"),
        "MUX_16to1": safe_load("16to1_MUX_mlp.pkl"),
        "DEMUX_1to16": safe_load("1to16_DEMUX_mlp.pkl"),
    }

    # Load Encoder (8→3)
    for bit in ["Y2", "Y1", "Y0"]:
        models[f"ENCODER_8to3_{bit}"] = safe_load(f"8to3_Encoder_{bit}_mlp.pkl")

    # Load Decoder (3→8)
    for i in range(8):
        models[f"DECODER_3to8_D{i}"] = safe_load(f"3to8_Decoder_D{i}_mlp.pkl")

    return models


# Global model dictionary
models = load_models()


def _prepare_input(inputs):
    return np.array(inputs, dtype=float).reshape(1, -1)


def predict_gate(gate_name, inputs):
    model = models.get(gate_name)
    if model is None:
        raise FileNotFoundError(f"Model for {gate_name} not found on server.")
    return int(model.predict(_prepare_input(inputs))[0])


def predict_full_adder(inputs):
    s_model = models.get("FULL_ADDER_SUM")
    c_model = models.get("FULL_ADDER_CARRY")
    if s_model is None or c_model is None:
        raise FileNotFoundError("Full Adder models missing.")
    x = _prepare_input(inputs)
    return int(s_model.predict(x)[0]), int(c_model.predict(x)[0])


def predict_encoder(inputs):
    x = _prepare_input(inputs)
    y2, y1, y0 = [
        models.get(f"ENCODER_8to3_{bit}") for bit in ["Y2", "Y1", "Y0"]
    ]
    if not all([y2, y1, y0]):
        raise FileNotFoundError("Encoder models missing.")
    return np.array([int(y2.predict(x)[0]), int(y1.predict(x)[0]), int(y0.predict(x)[0])])


def predict_decoder(inputs):
    x = _prepare_input(inputs)
    outputs = []
    for i in range(8):
        model = models.get(f"DECODER_3to8_D{i}")
        if model:
            outputs.append(int(model.predict(x)[0]))
        else:
            outputs.append(0)
    return np.array(outputs)


def predict_mux_16to1(inputs):
    model = models.get("MUX_16to1")
    if model is None:
        raise FileNotFoundError("MUX model missing.")
    return int(model.predict(_prepare_input(inputs))[0])


def predict_demux_1to16(inputs):
    model = models.get("DEMUX_1to16")
    if model is None:
        raise FileNotFoundError("DEMUX model missing.")
    return (model.predict(_prepare_input(inputs)) > 0.5).astype(int)[0]
