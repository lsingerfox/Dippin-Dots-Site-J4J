import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './header-nav/navbar';
import Home from './home';
import Mini from './shop/shop';
import Events from './events/events';
import Contact from './contact';
import About from './aboutComponents/about';

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
            <Route path="/about-us" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}
