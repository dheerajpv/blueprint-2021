import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exoplanets from "./pages/Exoplanets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
    return (
        <div className="page-container">
            <Navbar />
            <div className="content-wrap">
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
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
};

export default App;
