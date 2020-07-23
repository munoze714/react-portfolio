import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./index.css";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Switch>
          <Route path="/contact" component={Contact} />
        </Switch>
        <Redirect from="/contact/index.html" to="/about" />
        {/* <Route path="/about" component={About} /> */}
      </Router >
    )
  }
}

export default App;
