import React, { Component } from 'react';
import FirstImg from '../../../static/images/header and logo/J4J-Header.png';

export default class Header extends Component {
    
    render() {
        return (
            <div className="img-wrapper">
               <img className="dd-img" src={FirstImg} alt="J4J Dippin' Dots Header Image" />
            </div>
        )
    }
}