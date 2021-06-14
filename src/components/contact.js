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
                    </div>
                </form>
            </div>
        )
    }
}