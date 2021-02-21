import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exoplanets from "./pages/Exoplanets";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
    return (
        <div className="page-container content-wrap">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/exoplanets" component={Exoplanets} />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
