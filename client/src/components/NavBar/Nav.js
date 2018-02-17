import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {Navbar} from "react-materialize";
import Auth from '../../modules/Auth';


export default class Nav extends Component {

  render(){

    return(
      <div>
       {Auth.isUserAuthenticated() ?
        (
          <Navbar className="header" style={{"background-color": "black"}}>
            <ul>
              <li className="right"><NavLink to="/logout">logout</NavLink></li>
              <li className="right"><NavLink to="/community">Community</NavLink></li>
              <li className="right"><NavLink to="/mappage">Map</NavLink></li>
            </ul>
          </Navbar>
        )
      :
        (
          <Navbar className="header" style={{"background-color": "black"}}>
            <ul>
              <li className="right"><NavLink to="/authenticationpage">Login Page</NavLink></li>
              <li className="right"><NavLink to="/community">Community</NavLink></li>
              <li className="right"><NavLink exact to="/about">About Us</NavLink></li>
            </ul>
          </Navbar>
        )
      }
      </div>
    );
  }
}
