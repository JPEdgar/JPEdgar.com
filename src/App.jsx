import React from "react";

// libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from "react-bootstrap"

// pages
import HomePage from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

// custom components

function App() {
  return (
    <Container>
      <Router>
        <HomePage />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
      </Router>
    </Container>
  );
}

export default App;
