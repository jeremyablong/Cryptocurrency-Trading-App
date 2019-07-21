import React, { Component } from 'react';
import HomepageMain from "./components/homepage/main.js";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/home/homepage.js";
import LandingPage from "./components/landing-page/afterAuthLanding.js";
import DietTracking from "./components/diet/tracking/diet-tracking.js";
import ProfileRegister from "./components/profile/register/register.js";
import GeneralHealthHome from "./components/forums/home/posts/general/home.js";
import Navigation from "./components/universal/navbar.js";
import CreatePostGeneral from "./components/forums/home/posts/general/createPostGeneral.js";

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
        <Route exact path="/health/health" component={GeneralHealthHome} />
        <Route exact path="/health/view/:id" component={Navigation} />
        <Route exact path="/health/create" component={Navigation} />
        <Route exact path="/health/create" component={CreatePostGeneral} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
