import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [image, setImage] = useState("");

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:5000/graph");
            const json = await res.json();
            setImage(json.image);
        })();
    }, []);

    return (
        <div className="home">
            <header>
                <h1>EXOPLANET GRAPHS</h1>
            </header>
            <div className="image-container">
                {image ? (
                    <center>
                        <img src={image} alt="a graph" width="50%" />
                    </center>
                ) : (
                    <>
                        <div
                            class="spinner-border"
                            role="status"
                            style={{ color: "red" }}
                        />
                        <br />
                        <span style={{ color: "white", paddingTop: "1rem" }}>
                            Loading...
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
