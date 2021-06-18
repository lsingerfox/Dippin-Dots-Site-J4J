import React, { Component } from 'react';

import Navbar from './header-nav/navbar';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <form>
                    <div className="two-columns">
                        <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={null}
                        />
                        <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={null}
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={null}
                        />
                        <input
                        type="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={null}
                        />
                    </div>
                    <div className="one-column">
                        <textarea
                        rows="10"
                        name="message"
                        placeholder="How may we help you?"
                        value={null}
                        />
                        
                        <button className="btn">
                            Send Message
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}