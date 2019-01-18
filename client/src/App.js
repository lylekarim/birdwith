import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Birders from "./pages/Birders";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/email" component={EmailForm} />
          <Route exact path="/" component={Birders} />
          <Route exact path="/birders" component={Birders} />
          <Route exact path="/birders/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
