import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Crazy from '../../static/images/crazy-dippin-dots.jpg';
import Cups from '../../static/images/dippin-dots-cups.jpg';
import Logo from '../../static/images/dippin-dots-logo.jpg';
import Spoon from '../../static/images/dippin-dots-spoon.jpg';
import Dotted from '../../static/images/dotted-background.png';

export default class Header extends Component {
    render() {
        return (
            <AliceCarousel className="carousel-images" autoPlay autoPlayInterval="3000">
                <img className="dd-img" src={Logo} alt="Dippin' Dots Logo" />
                <img className="dd-img" src={Spoon} alt="Dippin' Dots in a Spoon" />
                <img className="dd-img" src={Dotted} alt="Dotted Dippin' Dots Background" />
                <img className="dd-img" src={Cups} alt="Dippin' Dots in Cups" />
                <img className="dd-img" src={Crazy} alt="Crazy Dippin' Dots" />
            </AliceCarousel>
        )
    }
}