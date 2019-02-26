import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>
                        <Link to="/">Home</Link>
                        <Link to="/otherpage">Other Page</Link>
                    </div>
                    <div>
                        <Route exact path="/" component={Fib} />
                        <Route path="/otherpage" component={OtherPage} />
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
