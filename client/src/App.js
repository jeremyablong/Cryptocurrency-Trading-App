import React, { Component } from 'react';
import HomepageMain from "./components/homepage/main.js";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/home/homepage.js";
import LandingPage from "./components/landing-page/afterAuthLanding.js";
import CryptoHome from "./components/cryptoData/tracking/cryptoHome.js";
import ProfileRegister from "./components/profile/register/account-home.js";
import Navigation from "./components/universal/navbar.js";
import Footer from "./components/universal/footer.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TableData from "./components/api-results-display/table/table.js";
import axios from "axios";
import store from "./store/store.js";
import ReduxPageOneSignup from "./components/redux-form/signup/page-1.js";
import Validate from "./components/redux-form/signup/validate.js";
// change this before deployment
const client = new ApolloClient({
  uri: "https://lit-fortress-30165.herokuapp.com/graphql"
})

class App extends Component {
componentDidMount () {
  axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1d&currency=BTC").then((res) => {
    // console.log(res.data);
  }).catch((err) => {
    console.log(err)
  })
  if (localStorage.getItem("JWTToken") === null) {
     console.log("Local storage JWTToken DOESN'T exist.")
  } else {
    console.log("Local storage JWTToken is ACTIVE AND SET.")
  }
}
render () {
  console.log(store.getState().authorize.token)
    return (
      <ApolloProvider client={client}>
       	<BrowserRouter>
          <div className="App">
        		<Route exact path="/" component={HomepageMain} />
            <Route exact path="/" component={Footer} />
        		<Route exact path="/login" component={Homepage} />
            <Route exact path="/login" component={Footer} />
        		<Route exact path="/homepage" component={LandingPage} />
            <Route exact path="/homepage" component={Footer} />
        		<Route exact path="/tracking/currencies" component={CryptoHome} />
            <Route exact path="/tracking/currencies" component={Footer} />
        		<Route exact path="/learnMore" component={ProfileRegister} />
            <Route exact path="/learnMore" component={Footer} />
            <Route exact path="/health/view/:id" component={Navigation} />
            <Route exact path="/health/view/:id" component={Footer} />
            <Route exact path="/tracking/table" component={Navigation} />
            <Route exact path="/tracking/table" component={TableData} />
            <Route exact path="/tracking/table" component={Footer} />


          {/* redux form - signup */}
          <Route exact path="/signup/initital" component={Navigation} />
          <Route exact path="/signup/initital" component={ReduxPageOneSignup} />
          <Route exact path="/signup/initial" component={Footer} />
          <Route exact path="/validate" component={Navigation} />
          <Route exact path="/validate" component={Validate} />
          <Route exact path="/validate" component={Footer} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
