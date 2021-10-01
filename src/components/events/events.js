import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';

export default class Events extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="calendar">
                    <h1 className="calendar-title">Event Calendar</h1>
                    <div className="weekday-names">
                        <h3>Sunday</h3>
                        <h3>Monday</h3>
                        <h3>Tuesday</h3>
                        <h3>Wednesday</h3>
                        <h3>Thursday</h3>
                        <h3>Friday</h3>
                        <h3>Saturday</h3>
                    </div>
                </div>
            </div>
        )
    }
}