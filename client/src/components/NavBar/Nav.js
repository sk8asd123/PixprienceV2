import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {Navbar} from "react-materialize";


class Nav extends Component {

  render(){
    return(
      <Navbar className="header" style={{"background-color": "black"}}>
        <ul>
          <li className="right"><NavLink to="/authenticationpage">Login Page</NavLink></li>
          <li className="right"><NavLink to="/community">Community</NavLink></li>
          <li className="right"><NavLink exact to="/about">About Us</NavLink></li>
        </ul>
      </Navbar>
    )
  }
}


export default Nav;
