import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import FirstImg from '../../../static/images/dippin-dots-logo.jpg';
import SecondImg from '../../../static/images/dippin-dots-spoon.jpg';
import ThirdImg from '../../../static/images/dotted-background.png';
import FourthImg from '../../../static/images/dippin-dots-cups.jpg';
import FifthImg from '../../../static/images/crazy-dippin-dots.jpg';

import Carousel from './carousel';

export default class Header extends Component {
    //const pictures=[FifthImg,FourthImg];
    
    render() {
        const pictures=[FifthImg,FourthImg];
        return (
            <AliceCarousel className="carousel-images" autoPlay autoPlayInterval="3000">
               
                <img className="dd-img" src={FifthImg} alt="Dippin-Dots-Photos" />
                <img className="dd-img" src={ThirdImg} alt="Dippin-Dots-Photos" />
            </AliceCarousel>
        )
    }
}