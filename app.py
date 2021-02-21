from flask import Flask, Request, Response
from flask_cors import CORS
from matplotlib import pyplot as plt
import pandas as pd
import io
import base64

app = Flask(__name__)
CORS(app)


data = pd.read_csv("src/PS_2021.02.18_14.17.39.csv", low_memory=False)

@app.route("/", methods=["GET"])
def exist():
    return {
        "hello": "i exist",
    }

@app.route("/graph", methods=["GET"])
def make_graph():
    s = io.BytesIO()
    plt.plot(list(range(100)))
    plt.savefig(s, format='png', bbox_inches="tight")
    plt.close()
    s = base64.b64encode(s.getvalue()).decode("utf-8").replace("\n", "")
    return {
        "image": "data:image/png;base64," + s,
    }

if (__name__ == "__main__"):
    app.run()
