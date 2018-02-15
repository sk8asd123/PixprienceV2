import React, { PropTypes, Fragment, Component} from 'react';
import { Route, NavLink, Redirect, withRouter, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import { browserHistory } from 'react-router';
import Auth from '../modules/Auth';


export default class Logout extends Component{

  componentWillMount(){
    console.log("Logging out");
    Auth.deauthenticateUser();
    this.props.history.push('/');
  }

render(){
  return(<div> Logging Out </div>);
}

};
