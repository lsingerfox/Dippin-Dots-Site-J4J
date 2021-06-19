import React, { Component } from 'react';
import FirstImg from '../../../static/images/dippin-dots-logo.jpg';

export default class Header extends Component {
    
    render() {
        return (
            <div className="dd-img">
               <img src={FirstImg} alt="Dippin' Dots Slideshow" />
            </div>
        )
    }
}