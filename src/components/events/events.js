import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';
import {EventCalendar} from './eventsCalendar'

export default class Events extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="calendar">
                    <h1 className="calendar-title">Event Calendar</h1>
                    <EventCalendar />
                </div>
            </div>
        )
    }
}