import React, { Component } from 'react';

import Navbar from './header-nav/navbar';

export default class Events extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <h3>Event List</h3>
            </div>
        )
    }
}