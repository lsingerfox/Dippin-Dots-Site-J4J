import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../static/images/Temp-Logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="right-nav">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            <img src={Logo} alt="Jump 4 Joy Montana Distributing LLC Logo" />
                        </NavLink>
                    </div>
                </div>
                
                <div className="center-nav">

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/shop" activeClassName="nav-link-active">
                            Shop
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/events" activeClassName="nav-link-active">
                            Events
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact-us" activeClassName="nav-link-active">
                            Contact Us
                        </NavLink>
                    </div>
                </div>

                <div className="left-nav">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-us" activeClassName="nav-link-active">
                            About Us
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}