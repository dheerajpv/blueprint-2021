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

if (__name__ == "__main__"):
    app.run()
