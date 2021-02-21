import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [image, setImage] = useState("");
    const [fail, setFail] = useState(false);

    const getGraph = async () => {
        const res = await fetch("http://localhost:5000/graph");
        if (res.status !== 200) {
            setFail(true);
            return;
        }

        const json = await res.json();
        setImage(json.image);
    };

    useEffect(() => {
        getGraph();
    }, []);

    return (
        <div className="home">
            <header>
                <h1 className="home-header">EXOPLANET GRAPHS</h1>
            </header>
            <div className="image-container">
                {image ? (
                    <>
                        <center>
                            <img
                                src={image}
                                alt="a randomly generated graph"
                                width="50%"
                            />
                        </center>
                    </>
                ) : fail ? (
                    <>
                        <p>
                            There was a problem generating this graph. Please
                            reload the page or press the regenerate button.
                        </p>
                    </>
                ) : (
                    <>
                        <div
                            className="spinner-border"
                            role="status"
                            style={{ color: "red" }}
                        />
                        <br />
                        <span className="visually-hidden">Loading...</span>
                    </>
                )}
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        getGraph();
                    }}
                >
                    Regenerate Graph
                </button>
            </div>
        </div>
    );
};

export default Home;
