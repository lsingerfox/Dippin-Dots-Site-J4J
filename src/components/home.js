import React, { Component } from 'react';

import Header from './header-nav/header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="link-grid">
                    <Link to exact="/shop" className="link-grid-icon">
                        <FontAwesomeIcon icon="store" />
                    </Link>
                    <Link to exact="/contact-us" className="link-grid-icon">
                        <FontAwesomeIcon icon="paper-plane" />
                    </Link>
                    <Link to exact="/about-us" className="link-grid-icon">
                        <FontAwesomeIcon icon="users" />
                    </Link>
                </div>
            </div>
        )
    }
}