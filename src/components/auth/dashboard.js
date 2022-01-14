import React, {Component} from "react";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.handleLoggedIn = this.handleLoggedIn.bind(this);
    }

    handleLoggedIn() {
        axios.get("https://backend-j4jmtdb.herokuapp.com/dashboard/", {

            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }).then(response => {
            if (response.status == 200) {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Incorrect email and/or password"
                });
                this.props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            this.setState({
                errorText: "An error has occured"
            });
            this.props.handleUnsuccessfulAuth();
        })
    }

    render() {
        return (
            <div className="dashboard">
                <div className="left-dashboard">
                    <axios className="name">
                        {this.name}
                    </axios>
                </div>
                <div className="right-dashboard">

                </div>
            </div>
        )
    }
}