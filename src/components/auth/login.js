import React, { Component } from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        axios.post("https://backend-j4jmtdb.herokuapp.com//user/login", {
           
                email: this.state.email,
                password: this.state.password
          
        }).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                sessionStorage.setItem('name',response.data.data.name)
                sessionStorage.setItem('email',response.data.data.email)
                sessionStorage.setItem('phone',response.data.data.phone)
                this.props.handleSuccessfulAuth();
            } else if (response.status == 401) {
                this.setState({
                    errorText: "Incorrect email and/or password"
                });
                this.props.handleUnsuccessfulAuth();
            } else {
                null
            }
        }).catch(error => {
            this.setState({
                errorText: "An error has occured"
            });
            this.props.handleUnsuccessfulAuth();
        })

        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h1>LOGIN</h1>


                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                    <FontAwesomeIcon icon="envelope" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </div>

                    <div className="form-group">
                    <FontAwesomeIcon icon="lock" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="login-error">{this.state.errorText}</div>

                    <div>
                        <button className="btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}