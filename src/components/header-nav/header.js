import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Carousel from './carousel';

export default class Header extends Component {
    render() {
        return (
            <AliceCarousel className="carousel-images" autoPlay autoPlayInterval="3000">
                <img className="dd-img" src={Carousel} alt="Dippin-Dots-Photos" />
            </AliceCarousel>
        )
    }
}