import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';
import Home from './home';
import Mini from './shop/miniShop';
import Events from './events';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Navbar />
        <Home />
        <Mini />
        <Events />
        <Contact />
      </div>
    );
  }
}
