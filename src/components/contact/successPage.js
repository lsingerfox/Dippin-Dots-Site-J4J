import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SuccessMsg extends Component {
    constructor(props) {
        super(props)

        this.contactPage = this.contactPage.bind(this);
        this.homePage = this.homePage.bind(this);
    }

    contactPage() {
        this.props.history.push("/contact-us")
    }

    homePage() {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className='success-msg-wrapper'>
                <div className='success-msg'>
                    <h1 className='msg-pt-1'>
                        Thank you for your message!
                    </h1>
                    <h2 className='msg-pt-2'>
                        You should receive a response 
                        within 24 to 48 hours.
                    </h2>
                    <div className='two-columns'>
                        <button className='home-btn' onClick={this.homePage}>
                            Return to Homepage
                        </button>
                        <button className='contact-btn' onClick={this.contactPage}>
                            Submit New Message
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}