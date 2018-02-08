/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////
import API from '../../utils/API.js'
import Nav from "../NavBar";
import Auth from '../../modules/Auth';

/////////////////////////////////////////////// /* CSS */ //////////////////////////////////////////////
import './LoginPage.nested.css'

/////////////////////////////////////////////// /* Main */ //////////////////////////////////////////////

export default class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }


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
      },

      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }

    }; // End State
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    // this.sendUserData = this.sendUserDate.bind(this);
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


    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this.props.history.push('/dashboard');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(this.state.logInInformation);



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


    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this.props.history.push('/dashboard');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(this.state.signUpInformation);

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
            {/* Sign Up Form */}
            <form className="inputs-cont" onSubmit={this.handleSignUpSubmit}>
              {this.state.successMessage && <p className="success-message">{this.state.successMessage}</p>}
              {this.errors && <p className="error-message">{this.errors}</p>}
              <div className="row">
                <div className="col s6">
                  <label className="input-label hidden overideActive">First Name</label>
                  <input type="text" ref="signUpFirstName" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label hidden overideActive">Last Name</label>
                  <input type="text" ref="signUpLastName" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>


                <div  className="col s6">
                  <label className="input-label overideActive">PASSWORD</label>
                  <input type="password" ref="signUpPassword" className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
                </div>

                <div className="col s6">
                  <label className="input-label overideActive">E-MAIL</label>
                  <input type="email" ref="signUpEmail" className="input-take" placeholder="Your email goes here" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label overideActive">Username</label>
                  <input type="text" ref="signUpUsername" className="input-take" placeholder="Enter your Username" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label overideActive">DOB</label>
                  <input type="text" ref="signUpDOB" class="datepicker"/>
                </div>
                {/* Submit Button */}
                <input className="send col s12" type="submit" defaultValue="Sign Up"/>

              </div>
            </form>

            {/* Sign In Form */}
            <form className="inputs-cont2" onSubmit={this.handleSignInSubmit}>
              <label className="input-label overideActive">User Name </label>
              <input type="text" ref="signInUsername" className="input-take" placeholder="Your Username Goes HEre" required="required"/> {/* button */}
              <label className="input-label overideActive">Password</label>
              <input type="password"  ref="signInPassword"className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
              <input className="send" type="submit" defaultValue="Sign In"/>
            </form>
          </div>
        </section>
      </section>

    </Fragment>); // End Return

  } // End Render

} // End Class
