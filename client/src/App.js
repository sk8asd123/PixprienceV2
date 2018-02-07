/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
import React, { Component } from "react";
import "./index.css";

import { Route, NavLink, HashRouter, BrowserRouter as Router } from "react-router-dom";



//////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import About from './components/About';
import LoginPage from './components/LoginPage';
import Community from './components/CommunityPage';
import Timeline from './pages/Timeline';
/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////////////
// import './App.css';
/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////
class App extends Component {
    render() {
        return (
            <Router>
                <switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/timeline" component={Timeline}/>
                </switch>
            </Router>
        );
    }
}

export default App;
