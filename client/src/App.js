/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
import React, { Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { Route, NavLink, Redirect, withRouter, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import About from './pages/About';
import AuthenticationPage from './pages/AuthenticationPage';
import Community from './pages/CommunityPage';
import Timeline from './pages/Timeline';

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////////////////
// import './App.css';
import "./index.css";
/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////////////////

injectTapEventPlugin(); // remove tap delay, essential for MaterialUI to work properly
const history = createBrowserHistory();


class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <switch>
                        <Route exact path="/" component={AuthenticationPage}/>
                        <Route exact path="/authenticationpage" component={AuthenticationPage}/>
                        <Route path="/about" component={About}/>
                        <Route path="/community" component={Community}/>
                        <Route path="/timeline" component={Timeline}/>
                    </switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
