import React, { Component } from 'react';

import Crazy from '../../static/images/crazy-dippin-dots.jpg';
import Cups from '../../static/images/dippin-dots-cups.jpg';
import Logo from '../../static/images/dippin-dots-logo.jpg';
import Spoon from '../../static/images/dippin-dots-spoon.jpg';
import Dotted from '../../static/images/dotted-background.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img className="dd_logo" src={Logo} alt="Dippin' Dots Logo" />
                <img className="dd_spoon" src={Spoon} alt="Dippin' Dots in a Spoon" />
                <img className="dd_dotted-background" src={Dotted} alt="Dotted Dippin' Dots Background" />
                <img className="dd_cups" src={Cups} alt="Dippin' Dots in Cups" />
                <img className="dd_crazy" src={Crazy} alt="Crazy Dippin' Dots" />
            </div>
        )
    }
}