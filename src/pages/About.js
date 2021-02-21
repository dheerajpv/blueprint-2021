import React from "react";
import Navbar from "../Components/Navbar";
import "./About.css";

const About = (props) => {
    console.log(props);
    return (
        <div className="about-us">
            <Navbar page={props.location.pathname} />
            <header className="about-us-header">
                <h1>
                    <center>ABOUT US</center>
                </h1>
            </header>
            <div className="container-info">
                <div className="row">
                    <div className="col-sm">
                        <h3 classname="headers">
                            <b>Dominique Dang</b>{" "}
                        </h3>
                        <p>
                            {" "}
                            Hello! I'm a sophomore interested in cryptography,
                            computer science, and astronomy. Yes - life exists
                            outside Earth. Yes - we will land on Mars by 2030.
                            Yes - I want to go to space. No - I do not believe
                            in UFO sighting though.
                        </p>
                        <details>
                            <summary>
                                <b>Favorite Lofi Playlist/Track/Artist? </b>{" "}
                            </summary>
                            <ul>
                                <li>Artist: eaJ</li>
                                <li>Playlist: Anything Studio Ghibli</li>
                                <li>
                                    Track:{" "}
                                    <a href="https://youtu.be/kmFaGbcD18c">
                                        {" "}
                                        J E N - d i v i n e
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>

                    <div className="col-sm">
                        <h3 classname="headers">
                            <b>Ismayil Ismayilov</b>{" "}
                        </h3>
                        <p>
                            {" "}
                            Hi. I worked on the visuals for this. I don't know
                            what to tell you. I think cryptography and 3D design
                            is pretty cool. I hope you enjoy the website, I
                            think exoplanets are pretty interesting. Can I go
                            home now? Oh wait.
                        </p>
                        <details>
                            <summary>
                                <b>Favorite Lofi Playlist/Track/Artist? </b>{" "}
                            </summary>
                            <ul>
                                <li>Artist: Ibrahim </li>
                                <li>
                                    Playlist: I usually just pick a random one
                                </li>
                                <li>
                                    Track:
                                    <a href="https://www.youtube.com/watch?v=IatXU05oUE0%22%3E">
                                        {" "}
                                        Ibrahim - Land of Petals{" "}
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>

                    <div className="col-sm">
                        <h3 classname="headers">
                            <b>Dheeraj Prakash</b>{" "}
                        </h3>
                        <p>
                            {" "}
                            Hi. I worked on the visuals for this. I don't know
                            what to tell you. I think cryptography and 3D design
                            is pretty cool. I hope you enjoy the website, I
                            think exoplanets are pretty interesting. Can I go
                            home now? Oh wait.
                        </p>
                        <details>
                            <summary>
                                <b>Favorite Lofi Playlist/Track/Artist? </b>{" "}
                            </summary>
                            <ul>
                                <li>Artist: Ibrahim </li>
                                <li>
                                    Playlist: I usually just pick a random one
                                </li>
                                <li>
                                    Track:
                                    <a href="https://www.youtube.com/watch?v=IatXU05oUE0%22%3E">
                                        {" "}
                                        Ibrahim - Land of Petals{" "}
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
