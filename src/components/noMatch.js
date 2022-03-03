import React, { Component } from "react";
import NoMatchPup from "../../static/images/no match/no-match-pup.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NoMatch extends Component {
    constructor(props) {
        super(props)

        this.homePage = this.homePage.bind(this);
    }

    homePage() {
        this.props.history.push("/")
    }
    
    render() {
        return (
            <div className="no-match-wrapper">
                <div className="sorry">
                    We're Sorry!
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon="frown" />
                </div>
                <div className="no-found">
                    The page you are looking for cannot be found.<br/>
                    Please click on the little dog below to take you home.
                </div>
                <img src={NoMatchPup} onClick={this.homePage} />
            </div>

        )
    }
}
