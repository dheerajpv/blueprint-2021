import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exoplanets from "./pages/Exoplanets";

const App = () => {
    return (
        <div className="App">
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
    );
};

export default App;
