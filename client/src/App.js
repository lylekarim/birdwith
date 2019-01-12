import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Birds from "./pages/Birds";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Birds} />
          <Route exact path="/birds" component={Birds} />
          <Route exact path="/birds/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
