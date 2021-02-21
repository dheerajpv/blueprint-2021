import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [image, setImage] = useState("");
    const [fail, setFail] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:5000/graph");
            if (res.status !== 200) {
                setFail(true);
                return;
            }

            const json = await res.json();
            setImage(json.image);
        })();
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
                            <img src={image} alt="a graph" width="50%" />
                        </center>
                    </>
                ) : fail ? (
                    <>
                        <p>
                            There was a problem generating this graph. Please
                            reload the page.
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
            </div>
        </div>
    );
};

export default Home;
