import React, { Component } from 'react';
import HomepageMain from "./components/homepage/main.js";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/home/homepage.js";
import LandingPage from "./components/landing-page/afterAuthLanding.js";
import CryptoHome from "./components/cryptoData/tracking/cryptoHome.js";
import ProfileRegister from "./components/profile/register/register.js";
import Navigation from "./components/universal/navbar.js";
import Footer from "./components/universal/footer.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TableData from "./components/api-results-display/table/table.js";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
render () {
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
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
