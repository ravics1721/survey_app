import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Response from "./components/Response";
import Signup from "./components/Signup";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/survey" component={SurveyForm} />
        <Route path="/response" component={Response} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
