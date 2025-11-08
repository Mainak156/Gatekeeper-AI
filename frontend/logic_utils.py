import os
import joblib
import numpy as np

# ======================================================
# 1️⃣ Load All Models
# ======================================================
def load_models():
    BASE_DIR = os.path.dirname(__file__)
    MODEL_DIR = os.path.join(BASE_DIR, "models")

    models = {
        "AND": joblib.load(os.path.join(MODEL_DIR, "and_gate_slp.pkl")),
        "OR": joblib.load(os.path.join(MODEL_DIR, "or_gate_slp.pkl")),
        "NOT": joblib.load(os.path.join(MODEL_DIR, "not_gate_slp.pkl")),
        "NAND": joblib.load(os.path.join(MODEL_DIR, "nand_gate_slp.pkl")),
        "NOR": joblib.load(os.path.join(MODEL_DIR, "nor_gate_slp.pkl")),
        "XOR": joblib.load(os.path.join(MODEL_DIR, "xor_gate_mlp.pkl")),
        "XNOR": joblib.load(os.path.join(MODEL_DIR, "xnor_gate_mlp.pkl")),
        "FULL_ADDER_SUM": joblib.load(os.path.join(MODEL_DIR, "full_adder_sum_mlp.pkl")),
        "FULL_ADDER_CARRY": joblib.load(os.path.join(MODEL_DIR, "full_adder_carry_mlp.pkl")),
        "MUX_16to1": joblib.load(os.path.join(MODEL_DIR, "16to1_MUX_mlp.pkl")),
        "DEMUX_1to16": joblib.load(os.path.join(MODEL_DIR, "1to16_DEMUX_mlp.pkl")),
    }

    # Load Encoder sub-models (8→3)
    for bit in ["Y2", "Y1", "Y0"]:
        path = os.path.join(MODEL_DIR, f"8to3_Encoder_{bit}_mlp.pkl")
        if os.path.exists(path):
            models[f"ENCODER_8to3_{bit}"] = joblib.load(path)

    # Load Decoder sub-models (3→8)
    for i in range(8):
        path = os.path.join(MODEL_DIR, f"3to8_Decoder_D{i}_mlp.pkl")
        if os.path.exists(path):
            models[f"DECODER_3to8_D{i}"] = joblib.load(path)

    return models


models = load_models()


def reload_models():
    global models
    models = load_models()
    print("♻️ Models reloaded successfully.")


# ======================================================
# 2️⃣ Helper Function
# ======================================================
def _prepare_input(inputs):
    """Ensure correct float 2D array input shape."""
    return np.array(inputs, dtype=float).reshape(1, -1)


# ======================================================
# 3️⃣ Gate and Circuit Predictors
# ======================================================
def predict_gate(gate_name, inputs):
    model = models[gate_name]
    x = _prepare_input(inputs)
    return int(model.predict(x)[0])


def predict_full_adder(inputs):
    x = _prepare_input(inputs)
    s = models["FULL_ADDER_SUM"]
    c = models["FULL_ADDER_CARRY"]
    return int(s.predict(x)[0]), int(c.predict(x)[0])


def predict_encoder(inputs):
    x = _prepare_input(inputs)
    y2 = models["ENCODER_8to3_Y2"].predict(x)[0]
    y1 = models["ENCODER_8to3_Y1"].predict(x)[0]
    y0 = models["ENCODER_8to3_Y0"].predict(x)[0]
    return np.array([int(y2), int(y1), int(y0)])


def predict_decoder(inputs):
    x = _prepare_input(inputs)
    outputs = []
    for i in range(8):
        model_key = f"DECODER_3to8_D{i}"
        model = models.get(model_key)
        y = model.predict(x)[0]
        outputs.append(int(y))
    return np.array(outputs)


# ======================================================
# ✅ Fixed: 16→1 Multiplexer
# ======================================================
def predict_mux_16to1(inputs):
    """
    inputs: [D0–D15, S0–S3]
    Combines data inputs and select lines properly.
    """
    model = models["MUX_16to1"]
    x = _prepare_input(inputs)
    if x.shape[1] != 20:
        raise ValueError(f"Expected 20 features (16 data + 4 select), got {x.shape[1]}")
    return int(model.predict(x)[0])


# ======================================================
# 1→16 DeMultiplexer
# ======================================================
def predict_demux_1to16(inputs):
    model = models["DEMUX_1to16"]
    x = _prepare_input(inputs)
    return (model.predict(x) > 0.5).astype(int)[0]
