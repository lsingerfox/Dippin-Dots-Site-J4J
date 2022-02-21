import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SuccessMsg extends Component {
 
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
                        <Link to="/" className='home-btn'>
                            Return to Homepage
                        </Link>
                        <Link to='/contact-us' className='contact-btn'>
                            Submit New Message
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}