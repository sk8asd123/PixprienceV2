/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../../components/NavBar";
import LoginPage from './LoginPage.js';
import SignUpPage from './SignUpPage.js';

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////
import './LoginPage.nested.css'

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////

export default class AuthenticationPage extends Component {

  state = {

    renderLogin : false,
    renderSignUp: true

  };

  componentDidMount() {
    let signIn = document.querySelector(".sign-in"),
      signUp = document.querySelector(".sign-up"),
      textLabel = document.querySelector(".hed"),
      Form = document.querySelector(".inputs-cont"),
      Form2 = document.querySelector(".inputs-cont2"),
      UserDetails = document.querySelector(".input-take"),
      goSend = document.querySelector(".send"),
      that = this;

      // Form2.style.display = "none";

      signIn.onclick = function() {
        "use strict";

        that.setState({renderLogin : true, renderSignUp: false});

        document.title = 'Sign In';
        textLabel.innerHTML = "Sign Up <lighter> or </lighter><span>Sign In </span>";
      };

      signUp.onclick = function() {
        "use strict";
        that.setState({renderLogin : false, renderSignUp: true});
        document.title = 'Sign Up';
        textLabel.innerHTML = "Sign In <lighter> or </lighter><span>Sign Up </span>";
      };
  } // End of componentDidMount

  render() {
    return (<Fragment>
      <Nav/>
      <section className="content">
        <section className="container-inside">
          {/* Left Container */}
          <div className="left-side">
            <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" className="left-img" title="sign up now and save 1200$"/>
          </div>
          {/* Right Container */}
          <div className="right-side">
            <div className="buttons-container">
              <button type="button" className="sign-up">Sign Up</button>
              <button type="button" className="sign-in">Sign In</button>
            </div>
            <div className="header">
              <h5 className="hed">Sign In
                <lighter>
                  or
                </lighter>
                <span>Sign Up</span>
              </h5>
            </div>

            {
              this.state.renderSignUp? <SignUpPage className="inputs-cont"/> :<LoginPage className="inputs-cont2"/>
            }



          </div>
        </section>
      </section>

    </Fragment>); // End Return

  } // End Render

} // End Class
