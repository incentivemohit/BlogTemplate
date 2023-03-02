import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Home/Header/About";
import Contact from "./components/Home/Header/Contact";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}
