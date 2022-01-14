import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../../static/images/header and logo/Temp-Logo.png';

const Navbar = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to="/dashboard" activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios.delete("https://backend-j4jmtdb.herokuapp.com/logout")
        .then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error signing out", error)
        })
    }

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
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-us" activeClassName="nav-link-active">
                            About Us
                        </NavLink>
                    </div>

                    { props.loggedInStatus === "LOGGED_IN" ? (dynamicLink("/dashboard", "Dashboard")) : null }
                </div>

                <div className="left-nav">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/login" activeClassName="nav-link-active">
                            Login

                            {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>
                                <FontAwesomeIcon icon="sign-out-alt" />
                            </a> : null}
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }

    export default withRouter(Navbar)