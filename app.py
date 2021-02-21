from flask import Flask
from flask_cors import CORS
from matplotlib import pyplot as plt
import io
import base64
import csv

app = Flask(__name__)
CORS(app)

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
            try:
                col2.append(float(row[75]))

    if len(col1) > len(col2):
        for i in range(len(col1) - len(col2)):
            col1.pop()
    elif len(col2) > len(col2) - len(col1):
        for i in range(len(col2) - len(col1)):
            col2.pop()

    plt.plot(col1, col2, "bo")
    plt.savefig(s, format='png', bbox_inches="tight")
    plt.close()
    s = base64.b64encode(s.getvalue()).decode("utf-8").replace("\n", "")

    # sends the image in a format displayable in an <img />
    return {
        "image": "data:image/png;base64," + s,
    }

if (__name__ == "__main__"):
    app.run()