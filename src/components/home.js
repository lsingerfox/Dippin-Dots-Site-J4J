import React, { Component } from 'react';

import Header from './header-nav/header';
import Navbar from './header-nav/navbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                    <Header />
                </div>
                <h1>Jump 4 Joy Montana Distributing, LLC.</h1>
                <h2>Dippin' Dots Site GO!</h2>
            </div>
        )
    }
}