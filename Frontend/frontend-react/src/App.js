import React from "react";
import { Route, Switch } from "react-router-dom";
import CitizenLoginPage from "../src/citizen/LoginPage";
import CitizenHomePage from "../src/citizen/HomePage";
import CitizenCheckInPass from "../src/citizen/CheckInPass";
import CitizenCheckOutPass from "../src/citizen/CheckOutPass";
import TracerLoginPage from "../src/tracer/LoginPage";
import GovtLoginPage from "../src/govt/LoginPage";
import GovtHomePage from "../src/govt/HomePage";
import RegisterUser from "../src/govt/RegisterUser.jsx";
import GovtCheckUser from "./govt/CheckUser";

const App = () => {
  return (
    <Switch>
      <Route exact path="/citizen" component={CitizenLoginPage} />
      <Route exact path="/citizen/home" component={CitizenHomePage} />
      <Route exact path="/citizen/checkinpass" component={CitizenCheckInPass} />
      <Route exact path="/citizen/checkoutpass" component={CitizenCheckOutPass} />
      <Route exact path="/tracer" component={TracerLoginPage} />
      <Route exact path="/govt" component={GovtLoginPage} />
      <Route exact path="/govt/home" component={GovtHomePage} />
      <Route exact path="/govt/home/register" component={RegisterUser} />
      <Route exact path="/govt/home/check" component={GovtCheckUser} />
    </Switch>
  );
};

export default App;
