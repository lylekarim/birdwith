import React, { Component } from 'react';
import API from "../utils/API";
//import './style.css';
import { Input, FormBtn } from "./Form";
import { FontAwesomeIcon } from 'react-fontawesome';


class LogIn extends Component {
  state = {
    isLoggedIn: false,
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
  };


  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", res.data.token);
          window.location.assign('/auth/main');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", "");
          window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };


  render() {
    return (

      <section className="primary-bg">
        <div className="container">
          <div id="login_signup">
            <div className="form_wrap_m">
              <div className="white_box">
                <h3>Hey, Welcome Back!</h3>
                <form>
                  <div className="form-group">

                    <Input className="form-control" type="email" name="email" id="login_email" placeholder="Email address" onChange={this.handleInputChange} />

                  </div>
                  <div className="form-group">

                    <Input className="form-control" type="password" name="password" id="login_Password" placeholder="Password" onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <FormBtn className="btn btn-block" value="Login" onClick={this.handleFormSubmit}>Login</FormBtn>
                  </div>
                </form>
                <p>Don't have an account? <a href="signup.html">Signup Here</a></p>
                <p><a href="lost-password.html">Lost your password?</a></p>
                <div className="back_home"><a href="index.html" className="btn outline-btn btn-sm"><FontAwesomeIcon icon="angle-double-left" />
                
                Back to Home</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default LogIn;