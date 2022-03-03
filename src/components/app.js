import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './header-nav/navbar';
import Home from './home';
import Contact from './contact/contact';
import About from './aboutComponents/about';
import SuccessMsg from './contact/successPage';
import ShopProduct from './shop/shop';
import Auth from "./auth";
import Dashboard from './auth/dashboard';
import Messages from './contact/messages';
import NoMatch from './noMatch';
import Icons from "./helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://backend-j4jmtdb.herokuapp.com/")
    .then (response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState ({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState ({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    })
    .catch(error => {
      console.log("Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedRoutes () {
    return [
      <Route key="dashboard" path="/dashboard" component={Dashboard} />,
      <Route key="messages" path="/messages" component={Messages} />
    ]
  }

  render() {
    return (
      <div className='container'>
        <Router>
        <div>
          <Navbar
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout} />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/login' render={props => (
              <Auth
                {...props}
                handleSuccessfulLogin = {this.handleSuccessfulLogin}
                handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}
              />
            )} />

            <Route path="/shop" component={ShopProduct} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/contact-success" component={SuccessMsg} />
            <Route path="/about-us" component={About} />
            
            <Route path="/messages"
              render={props => (
                <Messages
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            <Route path="/dashboard"
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            <Route path="/no-match" component={NoMatch} />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}
