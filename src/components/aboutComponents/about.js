import React, { Component } from 'react';

import Navbar from '../header-nav/navbar';
import JamesShannon from '../../../static/images/about/JamesShannon.png';
import NiblackKids from '../../../static/images/about/NiblackKids.png';
import JRLynell from '../../../static/images/about/JRLynell.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about-wrapper">
                    <div className="about-squares">
                        <div className="cover-photo">
                            <img src={JamesShannon} alt="James and Shannon" />
                            <div className="text-wrapper">
                                <h1>Meet The Owners</h1>
                                <p>
                                    James and Shannon had heard about the Dippin' Dots story on the TV show Undercover Boss. James realized that he had not seen them around in a while and wanted to try and get in on the action. They continuously reached out to the corporate office until they got them in touch with the closest Dippin' Dots representative to him. He has enjoyed providing joy to all with Dippin' Dots since March 2020.
                                </p>
                            </div>
                        </div>
                        <div className="cover-photo">
                            <img src={NiblackKids} alt="The Kids" />
                            <div className="text-wrapper">
                                <h1>Meet The Kids</h1>
                                <p>
                                    These 4 kids are the reason that we do what we do. The two oldest are starting to chase after their dreams of attending college and facing the world while the two youngest continue exploring life's wonders.
                                </p>
                            </div>
                        </div>
                        <div className="cover-photo">
                            <img src={JRLynell} alt="JR and Lynell" />
                            <div className="text-wrapper">
                                <h1>Meet The Co-Owners</h1>
                                <p>
                                    John and Lynell Singer met in Seaside, CA at college and have been together ever since. After getting married, John introduced Lynell to his high school friend, James Niblack. Their friendship grew and soon both John and Lynell found themselves on an adventure with James and his wife, Shannon, as they chased after their dreams of owning a part of Dippin' Dots.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}