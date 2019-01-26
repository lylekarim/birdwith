import React, { Component } from 'react';
// import API from "../../utils/API";
//import './style.css';
import { FormBtn } from "./Form";
import { FontAwesomeIcon } from 'react-fontawesome';




class LogOut extends Component {
  state = { isLoggedIn: false };

  handleExit = event => {
    event.preventDefault();
    console.log("Back to Root");
    window.location.assign('/');
  };


  render() {
    return (
 
      <section class="primary-bg">
      <div class="container">
          <div id="login_signup">
              <div class="form_wrap_m">
                  <div class="white_box">
                      <h3>Hey, you're all logged out</h3>
                     
                      <p>Don't have an account? <a href="signup.html">Signup Here</a></p>
                      <p><a href="lost-password.html">Lost your password?</a></p>
                      <div class="back_home"><a href="index.html" class="btn outline-btn btn-sm"><FontAwesomeIcon icon="angle-double-left" /> Back to Home</a></div>
                      <FormBtn onClick={this.handleExit} >Close</FormBtn>
           
                  </div>
              </div>
          </div>
      </div>
  </section>
    );
  }
}


export default LogOut;