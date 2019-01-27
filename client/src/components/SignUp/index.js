import React, { Component } from 'react';
import API from "../../utils/API";
//import './style.css';
import { FormBtn, Input } from '../Form';
import { FontAwesomeIcon } from 'react-fontawesome';


class SignUp extends Component {
  state = {
    isLoggedIn: false,
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
   // console.log("name = " + name);
   // console.log("value = " + value);
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.createUser({
      email: this.state.email,
      password: this.state.password
    });
   // console.log("state = " + JSON.stringify(this.state));
  };


  createUser = query => {
    console.log("query = " + JSON.stringify(query));
    API.createUser(query)
      .then(res => {
      //  console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
       //   console.log("in success handle");
          window.location.assign('/login');
          // this.setState({ loginStatus: true, });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: true, });
          // this.setState({ loginMsg: res.data.message });
        } else {
         // console.log("in failure handle");
          window.location.assign('/signup');
          // this.setState({ loginStatus: false });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: false });
          // this.setState({ loginMsg: res.data.message });
        }
        // console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
<div>
<section className="primary-bg">
	<div className="container">
    	<div id="login_signup">
            <div className="form_wrap_m">
            	<div className="white_box">
                	<h3>Sign Up</h3>
                    <form>
                  <div className="form-group">

                    <Input className="form-control" type="email" name="email" id="login_email" placeholder="Email address" onChange={this.handleInputChange} />

                  </div>
                  <div className="form-group">

                    <Input className="form-control" type="password" name="password" id="login_Password" placeholder="Password" onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <FormBtn className="btn btn-block" value="Login" onClick={this.handleFormSubmit}>Join BirdWith</FormBtn>
                  </div>
                </form>
                    <p>Already have an account? <a href="/login">Sign In</a></p>
                    {/* <div className="back_home"><a href="index.html" className="btn outline-btn btn-sm"><FontAwesomeIcon icon="angle-double-left" /> Back to Home</a></div> */}
                </div>
            </div>
        </div>
    </div>
</section>
</div>

    );
  }
}

export default SignUp;

