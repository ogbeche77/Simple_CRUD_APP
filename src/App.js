import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./css/main.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Universe from "./pages/Universe";
import Stars from "./pages/Stars";
import Imprint from "./pages/Imprint";
import logo from "./utils/logo.png";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="universe" />
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/universe" component={Universe} />
          <Route exact path="/stars" component={Stars} />
          <Route exact path="/imprint" component={Imprint} />
        </Container>
      </Router>
    </>
  );
}

export default App;
