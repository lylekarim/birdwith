import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faPlusCircle, faUser, faArrowCircleLeft, faArrowCircleRight, faTrashAlt, faChevronRight, faChevronLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './App.css';
//import { Button, Header, Grid, Icon, Image, Label, Menu, Segment, Sidebar, Container } from 'semantic-ui-react';
// import { Badge, Button, Dropdowns, Forms, Glypicons, Images, Label, ListGroup, Modal, Navs, Navbar, Overlays, Pagination, Panel, Popovers, Table, Tabs, Tooltips, Well } from 'react-bootstrap';
import Login from './components/Login';
import Logout from './components/Logout';
import AppMain from './pages/AppMain';
import NoMatch from "./pages/NoMatch";
import PubLand from './components/PubLand';
import Signup from './components/Signup';
import TaskBoard from './components/TaskBoard';
import Calendar from './components/Calendar';


// import AppMain from './pages/AppMain';
// import Logout from './components/Logout';
// import WeekBlock from './components/WeekBlock';



library.add(faCogs, faPlusCircle, faUser, faArrowCircleLeft, faArrowCircleRight, faTrashAlt, faChevronRight, faChevronLeft, faTimesCircle)

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
          <Switch>
            <Route exact path="/" component={PubLand} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/main" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/auth/main" />
              ) : (
                  <Login handleLoginStatus={this.handleLoginStatus} />
              ))} />

            <Route exact path="/auth/main" component={AppMain} />
            {/* <Route exact path="/auth/dashboard" component={DashBoard} /> */}
            <Route exact path="/auth/taskboard" component={TaskBoard} />
            <Route exact path="/auth/calendar" component={Calendar} />
            {/* <Route exact path="/auth/calendar" component={Calendar} /> */}


              {/* <AppMain
               loginState={this.reportLogin()}
               userEmail={this.reportEmail()}
               />
            )} /> */}


            {/* <PubLand /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
};


export default App;