import React, {Component} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: ""
        }

        this.handleLoggedIn = this.handleLoggedIn.bind(this);
    }

    handleLoggedIn() {
        axios.get("localhost:5000/dashboard/", {
            user: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone
            }
            
        }).then(response => {
            if (response.status == 200) {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Unable to load information"
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

    componentDidMount() {

        this.setState({
            name: sessionStorage.getItem("name"),
            email: sessionStorage.getItem("email"),
            phone: sessionStorage.getItem("phone")
        })
    }
    render() {
        return (
            <div className="dashboard">
                <div className="left-dashboard">
                    <div className="image">
                        <FontAwesomeIcon icon="portrait" />
                    </div>
                </div>
                <div className="right-dashboard">
                    <div className="contact">
                        <div className="name">
                            Name: {this.state.name}
                        </div>
                        <div className="email">
                            Email: {this.state.email}
                        </div>
                        <div className="phone">
                            Phone: {this.state.phone}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}