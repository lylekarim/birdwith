import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Birders from "./pages/Birders";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import EmailForm from "./components/EmailForm";
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    isLoggedIn: false,
    loginEmail: ""
  }

  handleLoginStatus = (passedStatus, passedEmail) => {
    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedEmail);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginEmail: passedEmail });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginEmail: passedEmail });
    };
    console.log("APP: state = " + JSON.stringify(this.state));
  };


  reportLogin = () => {
    let note = this.state.isLoggedIn;
    return note
  };

  reportEmail = () => {
    let email = this.state.loginEmail;
    return email;
  };
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Switch>
            <Route exact path="/" component={Birders} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/email" component={EmailForm} />
            <Route exact path="/birders/:id" component={Detail} />
            <Route exact path="/main" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/auth/main" />
              ) : (
                  <LogIn handleLoginStatus={this.handleLoginStatus} />
                ))} />

            <Route exact path="/auth/main" component={Birders} />
            <Route component={NoMatch} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};


export default App;



