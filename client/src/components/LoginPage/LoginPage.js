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
      images: []
    }

  } // End of Constructor

  componentDidMount() {
    var signIn = document.querySelector(".sign-in"),
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
  }

  render() {
    return (<Fragment>

      <section>
        <section className="container-inside">
          <div className="left-side">
            <img src="https://e.top4top.net/p_649v02so1.png" className="left-img" title="sign up now and save 1200$"/>
          </div>
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
            <form className="inputs-cont">
              <div className="row">

                <div className="col s6">
                  <label className="input-label hidden">First Name</label>
                  <input type="text" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label hidden">Last Name</label>
                  <input type="text" className="input-take" placeholder="Enter your full name" required="required"/>
                </div>


                <div  className="col s6">
                  <label className="input-label">PASSWORD</label>
                  <input type="password" className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
                </div>

                <div className="col s6">
                  <label className="input-label">E-MAIL</label>
                  <input type="email" className="input-take" placeholder="Your email goes here" required="required"/>
                </div>

                <div className="col s6">
                  <label className="input-label">Username</label>
                  <input type="text" className="input-take" placeholder="Enter your Username" required="required"/>
                </div>

                {/* <div className="col s6">
                  <input type="radio" name="gender" value="male" checked/>
                  <input type="radio" name="gender" value="female"/>
                  <input type="radio" name="gender" value="other"/>
                </div> */}

                <div className="col s6">
                  <label className="input-label">DOB</label>
                  <input type="text" class="datepicker"/>
                </div>

                  <input className="send col s12" type="submit" defaultValue="Sign Up"/>

              </div>
            </form>


            {/* for 2 */}
            <form className="inputs-cont2">
              <label className="input-label">PASSWORD</label>
              <input type="password" className="input-take" placeholder="* * * * * * * *" required="required" maxLength={12}/>
              <label className="input-label">E-MAIL</label>
              <input type="email" className="input-take" placeholder="Your email goes here" required="required"/> {/* button */}
              <input className="send" type="submit" defaultValue="Sign In"/>
            </form>
            {/* end it fast */}
          </div>
        </section>
      </section>

    </Fragment>); // End Return

  } // End Render

} // End Class
