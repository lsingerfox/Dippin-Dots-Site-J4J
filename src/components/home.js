import React, { Component } from 'react';

import Header from './header-nav/header';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="link-grid">
                    <NavLink exact to="/shop" className="link-grid-icon">
                        <FontAwesomeIcon icon="store" />
                        <div className='shop'>
                            Shop
                        </div>
                    </NavLink>
                    <NavLink exact to="/contact-us" className="link-grid-icon">
                        <FontAwesomeIcon icon="paper-plane" />
                        <div className='contact'>
                            Contact Us
                        </div>
                    </NavLink>
                    <NavLink exact to="/about-us" className="link-grid-icon">
                        <FontAwesomeIcon icon="users" />
                        <div className='about'>
                            About Us
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}