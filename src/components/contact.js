import axios from 'axios';
import React, { Component } from 'react';

import Navbar from './header-nav/navbar';

export default class Contact extends Component {
    constructor (props) {
        super (props);

        this.state = {
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleMessage(event) {
        axios.post("https://backend-j4jmtdb.herokuapp.com/contact", {
            fullName: this.setState.fullName,
            companyName: this.setState.companyName,
            email: this.setState.email,
            phone: this.setState.phone,
            subject: this.setState.subject,
            message: this.setState.message
        }) .then(response => {
            if (response.status == 200) {
                console.log(response.data)
            } else if (response.status == 401) {
                this.setState({
                    errorText: "Please fill out all required fields"
                });
            } else {
                null
            }
        }).catch(error => {
            this.setState({
                errorText: "An error has occurred"
            })
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>CONTACT US</h1>
                <form onSubmit={this.handleMessage}>
                    <div className="two-columns">
                        <input
                        type="text"
                        name="name"
                        placeholder="* Full Name"
                        value={this.state.fullName}
                        />
                        <input
                        type="text"
                        name="company"
                        placeholder="  Company Name"
                        value={this.state.companyName}
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="* Email"
                        value={this.state.email}
                        />
                        <input
                        type="phone"
                        name="phone"
                        placeholder="* Phone Number"
                        value={this.state.phone}
                        />
                    </div>
                    <div className="one-column">
                        <input
                        type = "subject"
                        name = "subject"
                        placeholder = "* Subject"
                        value = {this.state.subject}
                        />
                        <textarea
                        rows="10"
                        name="message"
                        placeholder="How may we help you?"
                        value={this.state.message}
                        />
                        
                        <button className="btn" type="submit">
                            Send Message
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}