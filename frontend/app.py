import streamlit as st
import numpy as np
import base64
import os
from logic_utils import (
    predict_gate,
    predict_full_adder,
    predict_encoder,
    predict_decoder,
    predict_mux_16to1,
    predict_demux_1to16,
    reload_models
)

# 🔄 Reload models on app start
reload_models()

# ===========================
# Streamlit Page Config
# ===========================
st.set_page_config(
    page_title="GateKeeper AI",
    layout="centered",
    page_icon="🤖"
)

# ===========================
# Add Background Image (absolute path fix)
# ===========================
def add_bg_from_local(image_file="assets/bgimg.png"):
    """Add a background image to Streamlit app that works both locally and on Streamlit Cloud."""
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        full_path = os.path.join(current_dir, image_file)

        if not os.path.exists(full_path):
            st.warning(f"⚠️ Background image not found: {full_path}")
            return

        with open(full_path, "rb") as img:
            encoded = base64.b64encode(img.read()).decode()

        mime_type = "image/png" if full_path.endswith(".png") else "image/jpeg"

        st.markdown(
            f"""
            <style>
            /* === Background Image === */
            .stApp {{
                background-image: url("data:{mime_type};base64,{encoded}");
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }}

            /* === Frosted Glass Container === */
            .block-container {{
                background: rgba(0, 0, 0, 0.55);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 20px;
                padding: 2rem 2.5rem;
                backdrop-filter: blur(12px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                color: white;
            }}

            /* === Text & UI Elements === */
            h1, h2, h3, h4, h5, h6, p, label, div, span {{
                color: white !important;
            }}

            /* === Buttons === */
            .stButton>button {{
                background: linear-gradient(90deg, #00c6ff, #0072ff);
                color: white;
                border: none;
                border-radius: 10px;
                padding: 0.5rem 1rem;
                font-weight: 600;
                transition: 0.3s ease;
            }}
            .stButton>button:hover {{
                transform: scale(1.05);
                box-shadow: 0 0 15px #00c6ff;
            }}
            </style>
            """,
            unsafe_allow_html=True
        )

        print(f"✅ Background image loaded from: {full_path}")

    except Exception as e:
        st.warning(f"⚠️ Could not load background: {e}")


# 🖼️ Load background image
add_bg_from_local("assets/bgimg.png")

# ===========================
# App Header
# ===========================
st.title("🤖 GateKeeper AI")
st.subheader("An Interactive Logic Circuit Simulator using MLP & SLP Models")
st.markdown("---")

# ===========================
# Dropdown for Circuit Type
# ===========================
ckt_type = st.selectbox(
    "Choose Circuit Type:",
    ["Logic Gate", "Combinational Circuit"]
)

# ===========================
# Logic Gate Section
# ===========================
if ckt_type == "Logic Gate":
    gate_name = st.selectbox(
        "Select Gate:",
        ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"]
    )

    st.markdown("### 🔢 Enter Inputs")

    # NOT gate → single input
    if gate_name == "NOT":
        a = st.selectbox("Input A:", [0, 1], key="not_a")
        inputs = np.array([[a]])
    else:
        a = st.selectbox("Input A:", [0, 1], key="a")
        b = st.selectbox("Input B:", [0, 1], key="b")
        c = st.selectbox("Input C:", [0, 1], key="c")
        inputs = np.array([[a, b, c]])

    if st.button("Compute Output", type="primary"):
        try:
            output = predict_gate(gate_name, inputs)
            val = int(output) if not isinstance(output, (list, np.ndarray)) else int(output[0])
            st.success(f"🧮 Output of {gate_name} Gate: **{val}**")
        except Exception as e:
            st.error(f"❌ Error: {e}")

# ===========================
# Combinational Circuit Section
# ===========================
else:
    circuit_name = st.selectbox(
        "Select Combinational Circuit:",
        ["Full Adder", "8-to-3 Encoder", "3-to-8 Decoder", "16-to-1 MUX", "1-to-16 DEMUX"]
    )

    st.markdown("### 🔢 Enter Inputs")

    # FULL ADDER
    if circuit_name == "Full Adder":
        A = st.selectbox("Input A:", [0, 1], key="fa_a")
        B = st.selectbox("Input B:", [0, 1], key="fa_b")
        Cin = st.selectbox("Carry In:", [0, 1], key="fa_cin")
        inputs = np.array([[A, B, Cin]])

        if st.button("Compute Output", type="primary"):
            try:
                sum_out, carry_out = predict_full_adder(inputs)
                st.success(f"SUM: **{sum_out}**, CARRY: **{carry_out}**")
            except Exception as e:
                st.error(f"❌ Error: {e}")

    # ENCODER
    elif circuit_name == "8-to-3 Encoder":
        inputs = [st.selectbox(f"Input D{i}:", [0, 1], key=f"enc{i}") for i in range(8)]
        inputs = np.array([inputs])

        if st.button("Compute Output", type="primary"):
            try:
                output = predict_encoder(inputs)
                st.success(f"Encoder Output (Y2 Y1 Y0): **[{output[0]} {output[1]} {output[2]}]**")
            except Exception as e:
                st.error(f"❌ Error: {e}")

    # DECODER
    elif circuit_name == "3-to-8 Decoder":
        inputs = [st.selectbox(f"Input X{i}:", [0, 1], key=f"dec{i}") for i in range(3)]
        inputs = np.array([inputs])

        if st.button("Compute Output", type="primary"):
            try:
                output = predict_decoder(inputs)
                st.success(f"Decoder Output (D0–D7): **[{', '.join(map(str, output.astype(int)))}]**")
            except Exception as e:
                st.error(f"❌ Error: {e}")

    # 16-to-1 MUX
    elif circuit_name == "16-to-1 MUX":
        st.info("Provide 16 Data Inputs (D0–D15) and 4 Select Lines (S0–S3)")
        data_inputs = [st.selectbox(f"D{i}:", [0, 1], key=f"d{i}") for i in range(16)]
        select_lines = [st.selectbox(f"S{i}:", [0, 1], key=f"s{i}") for i in range(4)]
        combined_input = np.array([data_inputs + select_lines])

        if st.button("Compute Output", type="primary"):
            try:
                output = predict_mux_16to1(combined_input)
                st.success(f"Output (Y): **{int(output)}**")
            except Exception as e:
                st.error(f"❌ Error: {e}")

    # 1-to-16 DEMUX
    elif circuit_name == "1-to-16 DEMUX":
        st.info("Provide 1 Input (D) and 4 Select Lines (S0–S3)")
        D = st.selectbox("Input D:", [0, 1], key="demux_d")

        # Reverse order fix for correct bit mapping (S3 S2 S1 S0)
        select_lines = [st.selectbox(f"S{i}:", [0, 1], key=f"demux_s{i}") for i in range(4)]
        combined_input = np.array([[D] + select_lines[::-1]])  # ✅ FIXED HERE

        if st.button("Compute Output", type="primary"):
            try:
                output = predict_demux_1to16(combined_input)
                st.success(f"DEMUX Output (Y0–Y15): **[{', '.join(map(str, output.astype(int)))}]**")
            except Exception as e:
                st.error(f"❌ Error: {e}")

st.markdown("---")
st.caption("🧠 Powered by Multi-Layer Perceptron Models | Developed by Mainak Sen")
