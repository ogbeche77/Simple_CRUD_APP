import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./css/main.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Universe from "./pages/Universe";
import Stars from "./pages/Stars";
import Imprint from "./pages/Imprint";
import logo from "./utils/logo.png";
import NotFound from "./pages/NotFound";

const App = () => {
  const sampleTest = "I am just a sampleTester";
  return (
    <>
      <img className="logo" src={logo} alt="universe" />
      <Router>
        <Container>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/universe" component={Universe} />
            <Route exact path="/stars" component={Stars} />
            <Route
              exact
              path="/imprint"
              render={() => <Imprint sampleTest={sampleTest} />}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
