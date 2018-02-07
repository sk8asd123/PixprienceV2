import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";


class Nav extends Component {

  render(){
    return(
      <ul className="header">
          <li><NavLink to="/login">Login Page</NavLink></li>
          <li><NavLink to="/community">Community</NavLink></li>
          <li><NavLink exact to="/">About Us</NavLink></li>
      </ul>
    )
  }
}


export default Nav;
