import React, { useEffect, useState } from "react";

const Home = () => {
    const [image, setImage] = useState("");

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:5000/graph");
            const json = await res.json();
            setImage(json.image);
        })();
    });

    return (
        <div>
            <p>
                <center>Exoplanet Graphs</center>
            </p>
            {image ? (
                <img src={image} alt="a graph" />
            ) : (
                <div class="spinner-border" role="status">
                    <span style={{ display: "none" }}>Loading...</span>
                </div>
            )}
        </div>
    );
};

export default Home;
