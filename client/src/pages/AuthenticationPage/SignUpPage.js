import React, { Component, PropTypes, Fragment } from 'react';
import SignUpForm from './SignUpForm.js';


class SignUpPage extends Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log('First Name:', this.state.user.firstName);
    console.log('Last Name:', this.state.user.lastName);
    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);

    // create a string for an HTTP body message
   const firstName = encodeURIComponent(this.state.user.firstName);
   const lastName = encodeURIComponent(this.state.user.lastName);
   const email = encodeURIComponent(this.state.user.email);
   const password = encodeURIComponent(this.state.user.password);
   const formData = `firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}`;

   // create an AJAX request
   const xhr = new XMLHttpRequest();
   xhr.open('post', '/auth/signup');
   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   xhr.responseType = 'json';
   xhr.addEventListener('load', () => {
     if (xhr.status === 200) {
       // success

       // change the component-container state
       this.setState({
         errors: {}
       });

       console.log('The form is valid');
     } else {
       // failure

       const errors = xhr.response.errors ? xhr.response.errors : {};
       errors.summary = xhr.response.message;

       this.setState({
         errors
       });
     }
   });
   xhr.send(formData);

  }


  /**
   * Render the component.
   */
  render() {
    return (
      <Fragment>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </Fragment>
    );
  }

}

export default SignUpPage;
