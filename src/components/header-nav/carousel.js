import React, { Component } from 'react';

import FirstImg from '../../../static/images/dippin-dots-logo.jpg';
import SecondImg from '../../../static/images/dippin-dots-spoon.jpg';
import ThirdImg from '../../../static/images/dotted-background.png';
import FourthImg from '../../../static/images/dippin-dots-cups.jpg';
import FifthImg from '../../../static/images/crazy-dippin-dots.jpg';

export default class Carousel extends Component {

    render(){
        const slideShow = [{FirstImg}, {SecondImg}, {ThirdImg}, {FourthImg}, {FifthImg}];
        return (
            slideShow
        )
    }
}