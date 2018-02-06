/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
import React, { Component } from "react";
import "./index.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import About from './components/About';
import LoginPage from './components/LoginPage';
import Community from './components/CommunityPage';
/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////////////
// import './App.css';
/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink to="/login">LoginPage</NavLink></li>
                        <li><NavLink to="/community">Community</NavLink></li>
                        <li><NavLink exact to="/">About Us</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={About}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/community" component={Community}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;