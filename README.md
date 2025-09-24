# Gatekeeper-AI

**Gatekeeper-AI** is a comprehensive project that implements digital logic gates and advanced circuits using Machine Learning (ML) and Artificial Neural Networks (ANN). The project demonstrates how ML models like Perceptrons and Multi-Layer Perceptrons can learn the behavior of logic gates, multiplexers, demultiplexers, encoders, and decoders. It combines both theoretical truth tables and practical ML visualizations.  

---

## 🔹 Features

- **Logic Gates:** NAND, NOR, XOR, AND, OR, NOT, XNOR  
- **Multiplexers (MUX):** 2-to-1 and 4-to-1  
- **Demultiplexers (DEMUX):** 1-to-2 and 1-to-4  
- **Encoders & Decoders**  
- **Visualizations for each model:**  
  - Truth Tables  
  - Histograms of outputs  
  - Scatter plots and 3D projections  
  - Training loss curves  
  - Heatmaps and pairplots to explore input-output correlations  

---


## 🔹 How to Run

Each module contains a Jupyter Notebook with the following:

1. **Data Preparation:** Generates truth tables for the gates or circuits.  
2. **Model Training:** Uses Perceptron or MLPClassifier to train the model.  
3. **Visualizations:**  
   - Histograms of outputs  
   - 3D scatter or PCA projections  
   - Training loss curves  
   - Heatmaps and pairplots  

Simply open the notebook and run the cells sequentially.

---

## 🔹 Example Visuals

- **Truth Table**: Shows expected outputs for inputs.  
- **Histogram**: Distribution of output values.  
- **3D Scatter/Projection**: Visualizes input-output relationships.  
- **Loss Curve**: Shows convergence during model training.  
- **Heatmap / Pairplot**: Shows correlations among inputs and outputs.  

_All visuals are stored in the respective `visuals/` folders for each module._

---

## 🔹 Libraries Used

- `numpy`  
- `pandas`  
- `matplotlib`  
- `seaborn`  
- `scikit-learn` (MLPClassifier, train_test_split, PCA)  

---

## 🔹 Future Enhancements

- Add **real-time frontend interface** for interactive logic gate simulation.  
- Extend to **larger circuits** like full adders, flip-flops, and ALU simulations.  
- Implement **dynamic visualization dashboards** with Plotly or Dash.

