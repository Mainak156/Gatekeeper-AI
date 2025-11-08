# frontend/test.py
import joblib, numpy as np

sum_m = joblib.load("frontend/models/full_adder_sum_mlp.pkl")
carry_m = joblib.load("frontend/models/full_adder_carry_mlp.pkl")

X = np.array([
    [0,0,0],[0,0,1],[0,1,0],[0,1,1],
    [1,0,0],[1,0,1],[1,1,0],[1,1,1]
], dtype=float)
y_sum   = np.array([0,1,1,0,1,0,0,1])
y_carry = np.array([0,0,0,1,0,1,1,1])

print("SUM preds:", sum_m.predict(X).astype(int))
print("CARRY preds:", carry_m.predict(X).astype(int))
print("SUM acc:", sum_m.score(X, y_sum))
print("CARRY acc:", carry_m.score(X, y_carry))
