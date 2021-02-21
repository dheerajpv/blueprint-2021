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
                            computer science, and astrobiology. I worked on the front end side of the project. 
                            Yes - life exists outside Earth. Yes - we will launch to Mars
                            by 2030. Yes - I want to go to space (I will leave
                            everything behind to go right now...). No - I do not
                            believe in UFO sighting though.
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
                                    <a
                                        href="https://youtu.be/kmFaGbcD18c"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
                        Hi. I worked on the visuals for this. I don't know what to tell you. I think cryptography and 3D design is pretty cool.
                        I hope you enjoy the website, I think exoplanets are pretty interesting. You know, I think I should have maybe
                        considered how painful rendering is before I started this. Can I go home now? Oh wait. 
                    </p>
                        <details> 
                            <summary><b>Favorite Lofi Playlist/Track/Artist? </b> </summary>
                        <ul>
                            <li>Artist: Ibrahim </li>
                            <li>Playlist: I usually just pick a random one</li>
                            <li><a href="https://www.youtube.com/watch?v=IatXU05oUE0"> Ibrahim - Land of Petals </a></li>
                        </ul>
                    </details>
                </div>

                    <div className="col-sm">
                        <h3 classname="headers">
                            <b>Dheeraj Prakash</b>{" "}
                        </h3>
                        <p>
                            {" "}
                            I am a sophore in Quincy High School, and I made
                            the graph generating function. I am interested in
                            computer science, and have experience in node.js,
                            especially discord.js. I am a huge fan of all things
                            space related (especially spacecraft and manned
                            spaceflight). And yes, vaporwave is better than lofi
                            music.
                        </p>
                        <details>
                            <summary>
                                <b>
                                    Favorite Vaporwave Playlist/Track/Artist?{" "}
                                </b>{" "}
                            </summary>
                            <ul>
                                <li>Artist: HOME </li>
                                <li>
                                    Playlist:{" "}
                                    <a
                                        href="https://www.youtube.com/watch?v=OnBLJjjYZHo&list=PL63ZO-jXFTasqvj7WdEFQ6QtG6UBrl9CR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Electronic Gems
                                    </a>
                                </li>
                                <li>
                                    Track:
                                    <a
                                        href="https://www.youtube.com/watch?v=8GW6sLrK40k"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        HOME - Resonance{" "}
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
