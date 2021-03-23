
import './App.css';
import Container from "./components/Container";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {Component} from 'react';
class App extends Component {
    render () {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={"/"} component={Container}/>
                </Switch>

            </div>

        </Router>

    );
}}

export default App;