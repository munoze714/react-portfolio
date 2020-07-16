import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Portfoilo from "./pages/Portfoilo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar />
        <Route path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfoilo} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </HashRouter>
    )
  }
}

export default App;
