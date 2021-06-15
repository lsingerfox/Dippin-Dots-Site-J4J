import React, { Component } from 'react';

import Navbar from './header-nav/navbar';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    About Us!
                </div>
            </div>
        )
    }
}