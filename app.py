from flask import Flask, Request, Response
from flask_cors import CORS
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
import io
import base64
import csv

app = Flask(__name__)
CORS(app)

def extend_with_extra_elements(*some_lists):
    max_some_lists_length = max(map(len, some_lists))
    for some_list in some_lists:
        extra_elements_count = max_some_lists_length - len(some_list)
        extra_elements = [0] * extra_elements_count
        yield some_list + extra_elements


data = pd.read_csv("src/PS_2021.02.18_14.17.39.csv", low_memory=False)

@app.route("/", methods=["GET"])
def exist():
    return {
        "hello": "i exist",
    }

@app.route("/graph", methods=["GET"])
def make_graph():
    s = io.BytesIO()
    col1 = []
    col2 = []
    
    # makes col1 and col2 have a list of values from the csv
    with open("src/PS_2021.02.18_14.17.39.csv", newline="") as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        for row in reader:
            try:
                col1.append(float(row[74]))
            except:
                pass

            try:
                col2.append(float(row[75]))
            except:
                pass

    col1, col2 = extend_with_extra_elements(col1, col2)

    plt.plot(col1[1:], col2[1:], "bo", antialiased=True)

    plt.savefig(s, format='png', bbox_inches="tight")
    plt.close()
    s = base64.b64encode(s.getvalue()).decode("utf-8").replace("\n", "")
    return {
        "image": "data:image/png;base64," + s,
    }

if (__name__ == "__main__"):
    app.run()