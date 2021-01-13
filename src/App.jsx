import React from "react";

// libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// pages
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

// custom components
import Footer from "./components/Footer";

function App() {
  return (
    <Container style={{ backgroundColor: "lightgray" }}>
      <Router>
        <MainPage />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/store" component={Store} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
