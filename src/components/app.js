import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './header-nav/navbar';
import Home from './home';
import Mini from './shop/miniShop';
import Events from './events';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/shop" component={Mini} />
            <Route path="/events" component={Events} />
            <Route path="/contact-us" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
