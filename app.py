from flask import Flask
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from random import randint
import numpy as np
import io
import base64
import csv

# truncates the longer list to be the same length as the shorter one
def truncate_lists(list1: list, list2: list):
    if len(list1) > len(list2):
        for i in range(len(list1) - len(list2)):
            list1.pop()
    elif len(list2) > len(list1):
        for i in range(len(list2) - len(list1)):
            list2.pop()

app = Flask(__name__)
CORS(app)

@app.route("/graph", methods=["GET"])
def make_graph():
    s = io.BytesIO()
    col1 = []
    col2 = []
    x_title = ""
    y_title = ""
    
    # makes col1 and col2 have a list of values from the csv
    with open("src/planets_2021.02.21_04.45.24.csv", newline="") as csvfile:
        reader = csv.reader(csvfile)

        # skip the first row because it has text that can't become a number
        header = next(reader)

        # there are 256 different columns in the (purged) csv, so it picks a random column
        seed_x = randint(0, 138)
        seed_y = randint(0, 138)

        try:
            x_title = header[seed_x]
        except:
            x_title = ""
        
        try:
            y_title = header[seed_y]
        except:
            y_title = ""

        for row in reader:
            try:
                col1.append(float(row[seed_x]))
            except:
                pass

            try:
                col2.append(float(row[seed_y]))
            except:
                pass

    truncate_lists(col1, col2)

    # getting the quartiles
    col1Arr = np.array(col1)
    col1FirstQ =  np.percentile(col1Arr, 25)
    col1ThirdQ = np.percentile(col1Arr, 75)
    
    col2Arr = np.array(col2)
    col2FirstQ = np.percentile(col2Arr, 25)
    col2ThirdQ = np.percentile(col2Arr, 75)

    # removing outliers using quartiles
    for i in col1:
        if i < col1FirstQ or i > col1ThirdQ:
            col1.remove(i)

    for i in col2:
        if i < col2FirstQ or i > col2ThirdQ:
            col2.remove(i)

    truncate_lists(col1, col2) # need to truncate again because lengths can be different

    # actually plotting the graph
    plt.plot(col1, col2, "bo")
    plt.xlabel(x_title)
    plt.ylabel(y_title)
    plt.savefig(s, format='png', bbox_inches="tight")
    plt.close()
    s = base64.b64encode(s.getvalue()).decode("utf-8").replace("\n", "")

    # sends the image in a format displayable in an <img />
    return {
        "image": "data:image/png;base64," + s,
    }

if (__name__ == "__main__"):
    app.run()