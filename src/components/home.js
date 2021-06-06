import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Navbar />
                </div>
                <h1>Jump 4 Joy Montana Distributing, LLC.</h1>
                <h2>Dippin' Dots Site GO!</h2>
            </div>
        )
    }
}