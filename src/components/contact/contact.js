import axios from 'axios';
import React, { Component } from 'react';

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
        this.pageSuccess = this.pageSuccess.bind(this);
    }

    pageSuccess() {
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            successMsg: "",
            errorMsg: "",
            errorText: ""
        })
    }

    handleMessage(event) {
        axios.post("https://backend-j4jmtdb.herokuapp.com/contact", {
            fullName: this.state.fullName,
            companyName: this.state.companyName,
            email: this.state.email,
            phone: this.state.phone,
            subject: this.state.subject,
            message: this.state.message
        }) .then(response => {
            if (response.status == 200) {
                console.log(response.data)
                this.setState({
                    successMsg: "Thank you for your message! You should receive a response within 24 to 48 hours."
                })
                this.props.history.push("/contact-success")
            } else if (response.status == 401) {
                this.setState({
                    errorMsg: "Please fill out all required fields"
                });
            } 

        }).catch(error => {
            console.log(error)
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
                        required
                        type="text"
                        name="fullName"
                        placeholder="* Full Name"
                        value={this.setState.fullName}
                        onChange={this.handleChange}
                        />
                        <input
                        type="text"
                        name="companyName"
                        placeholder="  Company Name"
                        value={this.setState.companyName}
                        onChange={this.handleChange}
                        />
                        <input
                        required
                        type="email"
                        name="email"
                        placeholder="* Email"
                        value={this.setState.email}
                        onChange={this.handleChange}
                        />
                        <input
                        required
                        type="phone"
                        name="phone"
                        placeholder="* Phone Number"
                        value={this.setState.phone}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="one-column">
                        <input
                        required
                        type = "subject"
                        name = "subject"
                        placeholder = "* Subject"
                        value = {this.setState.subject}
                        onChange={this.handleChange}
                        />
                        <textarea
                        required
                        rows="10"
                        name="message"
                        placeholder="How may we help you?"
                        value={this.setState.message}
                        onChange={this.handleChange}
                        />
                        
                        <div className='msg-submit-error'>{this.state.errorMsg}</div>
                        <div className='msg-submit-error'>{this.state.errorText}</div>
                        <div className='msg-submit-success'>{this.state.successMsg}</div>

                        <button className="btn" type="submit" onClick={this.handleMessage}>
                            Send Message
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}