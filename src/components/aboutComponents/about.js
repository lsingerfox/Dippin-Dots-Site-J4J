import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';
import JamesShannon from '../../../static/images/about/JamesShannon.png';
import NiblackKids from '../../../static/images/about/NiblackKids.png';
import JRLynell from '../../../static/images/about/JRLynell.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="about-wrapper">
                    <div className="about-wrapper_top">
                        <img src={JamesShannon} alt="James and Shannon" />
                        <div className="about-wrapper_top_text">
                            <h1>Meet The Owners</h1>
                            <p>
                                James and Shannon are 
                            </p>
                        </div>
                    </div>
                    <div className="about-wrapper_center">
                        <img src={NiblackKids} alt="The Kids" />
                        <div className="about-wrapper_center_text">
                            <h1>Meet The Kids</h1>
                            <p>
                                These 4 kids are the reason that we do what we do. The oldest two are starting to run and chase their dreams while the younger kids are still exploring life's wonders.
                            </p>
                        </div>
                    </div>
                    <div className="about-wrapper_bottom">
                        <img src={JRLynell} alt="JR and Lynell" />
                        <div className="about-wrapper_bottom_text">
                            <h1>Meet The Co-Owners</h1>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}