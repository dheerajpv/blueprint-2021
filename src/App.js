import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exoplanets from "./pages/Exoplanets";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="page-container">
        <div className = "content-wrap">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/exoplanets">
                        <Exoplanets />
                    </Route>
                </Switch>
            </Router>
        </div>
            <Footer />
        </div>
    );
};

export default App;