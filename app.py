from flask import Flask
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from random import randint
import io
import base64
import csv


app = Flask(__name__)
CORS(app)

@app.route("/graph", methods=["GET"])
def make_graph():
    s = io.BytesIO()
    col1 = []
    col2 = []
    
    # makes col1 and col2 have a list of values from the csv
    with open("src/PS_2021.02.18_14.17.39.csv", newline="") as csvfile:
        reader = csv.reader(csvfile)
        next(reader)

        # there are 256 different columns in the (purged) csv, so it picks a random column
        seed = randint(0, 256)

        for row in reader:
            try:
                col1.append(float(row[seed]))
            except:
                pass

            try:
                col2.append(float(row[seed]))
            except:
                pass

    # truncates the longer list to be the same length as the shorter one
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