import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';

export default class Mini extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <h3>Mini Shop Here!</h3>
            </div>
        )
    }
}