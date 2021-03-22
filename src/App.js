
import './App.css';
import Looper from "./components/Looper";
import Container from "./components/Container";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {Component} from 'react';
class App extends Component {
    render () {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>

                    <Route exact path={"/"} component={Container}/>
                    <Route path={"/looper/:color"} component={Looper}/>
                </Switch>

            </div>

        </Router>

    );
}}

export default App;