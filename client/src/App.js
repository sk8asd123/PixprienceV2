/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
import React, { Component } from "react";
import "./index.css";

import { Route, NavLink, Redirect, withRouter, Link, BrowserRouter as Router } from "react-router-dom";

//////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import About from './components/About';
import LoginPage from './components/LoginPage';
import Community from './components/CommunityPage';
import Timeline from './pages/Timeline';
import Auth from './modules/Auth';

// Routes from Passport //
// import Base from './components/Base.jsx';
// import HomePage from './components/HomePage.jsx'; // Same as Login Page
// import LoginPage from './containers/LoginPage.jsx'; // Same as Login Page
// import LogoutFunction from './containers/LogoutFunction.jsx';
// import SignUpPage from './containers/SignUpPage.jsx'; // Same as Login Page
// import DashboardPage from './containers/DashboardPage.jsx';

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////////////
// import './App.css';
/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);




/////////////////////////////////////////////// /* Export Class */ //////////////////////////////////////////////////////////
class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        authenticated: false
      }
    };

    componentDidMount() {
      // check if user is logged in on refresh
      this.toggleAuthenticateStatus()
    }

    toggleAuthenticateStatus() {
      // check authenticated status and toggle state based on that
      this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

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
