import React from "react";
import Navbar from "../Components/Navbar";
import "./Exoplanet.css";

const Exoplanets = (props) => {
    return (
        <div className="exoplanets">
            <Navbar page={props.location.pathname} />
            <header className="exoplanets-header">
                <h1>
                    <center>EXOPLANETS {"&"} ASTROBIOLOGY</center>
                </h1>
            </header>
            <div className="container-exoplanets">
                <h3 classname="headers">What are exoplanets? </h3>
                <p>
                    {" "}
                    Exoplanets are planets outside our Solar System. Some orbit
                    other stars but there are free-floating exoplanets that do
                    not. Instead, they orbit the galatic center and are called
                    rogue planets.{" "}
                </p>

                <details className="facts">
                    <summary>
                        <b>Fun Fact! </b>{" "}
                    </summary>
                    <p>
                        Discovered by NASA's Kepler Space Telescope: we know now
                        that there are more planets than stars in the galaxy.{" "}
                    </p>
                </details>

                <p>
                    The majority of discovered exoplanets are in the Milky Way
                    Galaxy. We can find exoplanets by measuring their size and
                    mass. Additionally, we can discover their composition
                    whether the planet is really rocky (like Earth) or very
                    gaseous (like Jupiter). Although they are similar in
                    composition to our own planets, the combination of basic
                    elements are different. For example, some planets could be
                    filled with water or ice but others could be predominantly
                    made of iron or carbon. When looking for exoplanets, we want
                    to look for specific types that could potentially host life
                    or have signs of previous life. Typically, the planet is the
                    same size as Earth and it orbits a start in the{" "}
                    <b>"habitable zone"</b>
                </p>
                <details className="facts">
                    <summary>
                        <b>Fun Fact! </b>{" "}
                    </summary>
                    <p>
                        {" "}
                        {"\n"} There are over 700 quintillion planets planets in
                        the Universe.
                    </p>
                </details>

                <h3 classname="headers">The Habitable Zone</h3>

                <p>
                    The habitable zone (commonly nicknamed the "Goldilocks
                    Zone") is a range of distances from a star where liquid
                    water could be possible - something extremely vital for life
                    on Earth. With recent calculations and discoveries, the
                    habitable zone includes other factors such as thermal
                    equilibrium and the greenhouse effect.
                </p>

                <p>
                    The habitable zone (commonly nicknamed the "Goldilocks
                    Zone") is a range of distances from a star where liquid
                    water could be possible - something extremely vital for life
                    on Earth. With recent calculations and discoveries, the
                    habitable zone includes other factors such as thermal
                    equilibrium and the greenhouse effect.
                </p>

                <h3 classname="headers">Astrobiology</h3>

                <p>
                    Are we alone? I think that is the biggest unanswered
                    question to this day. I remember when I was first asked this
                    question, I immediately said yes. It was a naive answer at
                    the time but I couldn't wrap my head around the possibility
                    that there could be life outside our planet. As I entered my
                    own wormhole of YouTube and papers, I learned about
                    exoplanets and astrobiology. With all the fun facts above,
                    the odds of not finding life is extremly small. Why haven't
                    we found anything? Let's bring in the Fermi Paradox, created
                    by Italian physicist, Enrico Fermi, who wondered this as
                    well. There are many reasons and interesting theories to the
                    Fermi Paradox but I wanted to share a few of my favorites.
                </p>
                <ol>
                    <li>
                        The Great Filter: a benchmark in our cosmological
                        timeline that is a test of survival, intelligence,
                        and/or society. That's a little broad but in most
                        theories about the Great Filter there is a general
                        consensus on the different scenarios.{" "}
                    </li>
                    <ul>
                        <li>
                            {" "}
                            We are behind the Great Filter (possibly millions of
                            years behind) and we will not reach this benchmark
                            during our lives. This means we are so
                            technologically behind that we cannot/will not
                            communicate with anyone else and/or we cannot/will
                            not find anything of importance.
                        </li>
                        <li>
                            We are approaching the Great Filter (in a couple
                            hundreds of years). This means we are reaching a
                            point where we are intelligent enough to communicate
                            with others and/or discover signs of life. However,
                            this might mean we are approaching our end soon
                            (unless we pass the Great Filter - more on that
                            later). The reason we haven't found anything because
                            either they did not pass the Great Filter or they
                            are slightly behind us.
                        </li>
                        <li>
                            We have passed the Great Filter (extremely
                            unlikely?) This means we are one of the few
                            civilizations that is intelligent enough to
                            communicate with others. Since Earth could be the
                            only signs of life however, there is no one else to
                            communicate to and that's why we haven't found
                            anyone yet.
                        </li>
                    </ul>
                    <li>
                        The Universe is too big: this is a catch-all theory but
                        the Universe is huge!
                        <details className="facts">
                            <summary>
                                <b>Fun Fact! </b>{" "}
                            </summary>
                            <p>{"\n"}The Universe is 13.8 billion years old!</p>
                        </details>
                        And we're just one planet in the middle of one among
                        billions of galaxies. Our current method of looking and
                        sending signals is similar to whispering in a large
                        crowd and expecting the person across the room to hear
                        you. Signals don't travel very far and most of them die
                        out to incomprehensible sounds. While we do send probes
                        and satellites (the Voyager probes) with human
                        artifacts, we don't know how long until someone (or
                        something) finds it or whether, anything will happen as
                        a result.
                    </li>
                </ol>
                <p>
                    I remember at a MIT HSSP class about astrobiology, one of
                    the teachers said, "If you take a cup of water from the
                    ocean, you wouldn't find a fish right away. It's just
                    like space, you won't find anything the first time." However, I thought, "Well, if you took a
                    microscope, you would certainly find microbial life." {"\n"}{" "}
                    But the final point was in that arguement: we don't have
                    that microscope for space yet. We can't travel to distant galaxies just how we can walk a mile to the
                    ocean and we can't zoom in to a planet to find life like we can with a microscope. But as technology
                    evolves and our understanding of life, astronomy, and
                    biology improves, we will most definitely soon find that we are not alone.
                </p>

                <h3>Mars Perseverance Rover</h3>
                    <p>
                        Launching on July 30, 2020, the Mars Perseverance Rover launched on the top of ULA on a mission to Mars. With a goal of 
                        collecting samples of rocks, conducting scientific tests, and paving the way for human flight to Mars, Perseverance, or Percy for short, 
                        also had an astrobiology mission. With those samples and its specific landing site, NASA hopes to one day collect those samples which could 
                        have evidence of previous life. 

                        <details className="facts">
                            <summary>
                                <b>Fun Fact! </b>{" "}
                            </summary>
                            <p>{"\n"}The Mars Perseverance Rover is also carrying MOXIE, a technology designed by MIT, to produce oxygen from martian atmospheric 
                            carbon dioxide. This technology could be used in the future to burn rocket fuel to return to Earth.</p>
                        </details>

                        After the 7 minutes of terror on February 18, 2021, the Mars Perseverance Rover landed on Mars using some of the most advanced technology 
                        that was ever launched in space. Scientists hope in a few months, Percy can collect some samples and in 2031 (hopefully), those samples can 
                        return to Earth and extensive research can occur.
                    </p>





                <p>
                    {" "}
                    Sources:
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <a href="https://www.space.com/17738-exoplanets.html">
                                www.space.com/17738-exoplanets.html
                            </a>
                        </li>
                        <li>
                            <a href="https://exoplanets.nasa.gov/what-is-an-exoplanet/overview/">
                                exoplanets.nasa.gov/what-is-an-exoplanet/overview/
                            </a>
                        </li>
                        <li>
                            <a href="https://exoplanets.nasa.gov/search-for-life/habitable-zone/ ">
                                exoplanets.nasa.gov/search-for-life/habitable-zone/ 
                            </a>
                        </li>
                        <li>
                            <a href="https://mars.nasa.gov/mars2020/mission/facts/">
                                mars.nasa.gov/mars2020/mission/facts/ 
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Exoplanets;
