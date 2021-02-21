import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";

const Home = (props) => {
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
            <Navbar page={props.location.pathname} />
            <center> 
                <header>
                    <h1 className="home-header">EXOPLANET GRAPHS</h1>
                </header>
            </center>

            <button
                    className="btn btn-primary"
                    onClick={() => {
                        getGraph();
                    }}
                >
                    Regenerate Graph
                </button>

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
                            style={{ color: "#A2D2FF" }}
                        />
                        <br />
                        <span className="visually-hidden">Loading...</span>
                    </>
                )}

            </div>
        </div>
    );
};

export default Home;
