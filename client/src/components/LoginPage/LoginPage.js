/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {Row, Input} from "react-materialize"

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////
import API from '../../utils/API.js'

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////
import './LoginPage.nested.css'

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////

export default class CommunityPage extends Component {

  constructor() {
    super();

    this.state = {
      signUpInformation: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        dob: ''
      },

      logInInformation: {
        username: '',
        password: ''
      }

    }; // End State
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.sendUserData = this.sendUserDate.bind(this);
  } // End of Constructor


  handleSignInSubmit(event){

    event.preventDefault();

    this.setState({
      logInInformation: {
        username:  this.refs.signInUsername.value,
        password:  this.refs.signInPassword.value
      }
    }, function(){
        alert("Sign Up Data is" + JSON.stringify(this.state.logInInformation));
    });
  } // End handleSignUpSubmit

  handleSignUpSubmit(event){

    event.preventDefault();

    this.setState({
      signUpInformation: {
        firstName: this.refs.signUpFirstName.value,
        lastName:  this.refs.signUpLastName.value,
        username: this.refs.signUpUsername.value,
        password: this.refs.signUpPassword.value,
        email: this.refs.signUpEmail.value,
        dob: this.refs.signUpDOB.value.replace(/\-/g,"")
      }
    }, function(){
        alert("Login Data is" + JSON.stringify(this.state.signUpInformation));
    });

  } // End handleSignInSubmit

  componentDidMount() {
    let signIn = document.querySelector(".sign-in"),
      signUp = document.querySelector(".sign-up"),
      textLabel = document.querySelector(".hed"),
      Form = document.querySelector(".inputs-cont"),
      Form2 = document.querySelector(".inputs-cont2"),
      UserDetails = document.querySelector(".input-take"),
      goSend = document.querySelector(".send");
      Form2.style.display = "none";

    signIn.onclick = function() {
      "use strict";
      Form.style.display = "none";
      Form2.style.display = "block";
      document.title = 'Sign In';
      textLabel.innerHTML = "Sign Up <lighter> or </lighter><span>Sign In </span>";
    };

    signUp.onclick = function() {
      "use strict";
      Form2.style.display = "none";
      Form.style.display = "block";
      document.title = 'Sign Up';
      textLabel.innerHTML = "Sign In <lighter> or </lighter><span>Sign Up </span>";
    };
  } // End of componentDidMount

  render() {
    return (<Fragment>

      <section>
        <section className="container-inside">
          {/* Left Container */}
          <div className="left-side">
            <img src="https://e.top4top.net/p_649v02so1.png" className="left-img" title="sign up now and save 1200$"/>
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
            {/* Sign Up Form */}
            <form className="inputs-cont" onSubmit={this.handleSignUpSubmit}>
              <div className="row">
                <div className="col s6">
                  <label className="input-label hidden">First Name</label>
                  <input type="text" ref="signUpFirstName" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label hidden">Last Name</label>
                  <input type="text" ref="signUpLastName" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>


                <div  className="col s6">
                  <label className="input-label">PASSWORD</label>
                  <input type="password" ref="signUpPassword" className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
                </div>

                <div className="col s6">
                  <label className="input-label">E-MAIL</label>
                  <input type="email" ref="signUpEmail" className="input-take" placeholder="Your email goes here" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label">Username</label>
                  <input type="text" ref="signUpUsername" className="input-take" placeholder="Enter your Username" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label">DOB</label>
                  <input type="text" ref="signUpDOB" class="datepicker"/>
                </div>
                {/* Submit Button */}
                <input className="send col s12" type="submit" defaultValue="Sign Up"/>

              </div>
            </form>

            {/* Sign In Form */}
            <form className="inputs-cont2" onSubmit={this.handleSignInSubmit}>
              <label className="input-label">User Name </label>
              <input type="text" ref="signInUsername" className="input-take" placeholder="Your Username Goes HEre" required="required"/> {/* button */}
              <label className="input-label">Password</label>
              <input type="password"  ref="signInPassword"className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
              <input className="send" type="submit" defaultValue="Sign In"/>
            </form>
          </div>
        </section>
      </section>

    </Fragment>); // End Return

  } // End Render

} // End Class
