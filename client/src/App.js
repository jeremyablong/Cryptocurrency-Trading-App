import React, { Component } from 'react';
import HomepageMain from "./components/homepage/main.js";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/home/homepage.js";
import LandingPage from "./components/landing-page/afterAuthLanding.js";
import DietTracking from "./components/diet/tracking/diet-tracking.js";
import ProfileRegister from "./components/profile/register/register.js";

class App extends Component {
render () {
    return (
   	<BrowserRouter>
      <div className="App">
		<Route exact path="/" component={HomepageMain} />
		<Route exact path="/login" component={Homepage} />
		<Route exact path="/homepage" component={LandingPage} />
		<Route exact path="/tracking/diet" component={DietTracking} />
		<Route exact path="/profile/register" component={ProfileRegister} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
