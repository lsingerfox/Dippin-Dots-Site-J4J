import React, { Component } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            loading: false,
            error: false
        };

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(messages) {
        axios.delete(`http://localhost:5000/message/${messages.id}`, 
        ).then(response => {
            this.setState({
                items: this.state.items.filter(item => {
                    return item.id !== message.id;
                })
            });
            
            console.log("Delete Successful", response.data)
            
            return response.data
        }).catch(error =>{
            console.log("handleDeleteClick error", error);
        })
    }

    componentDidMount() {
        fetch("https://backend-j4jmtdb.herokuapp.com/messages")
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            this.setState({
                messages: data.data,
                loading:false
            })
        }).catch(error => {
            console.log("Error getting items", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderMessages() {
        const msgHtml = this.state.messages.map(message => (
            <div className='message'>
                <div className='two-columns' key={message.id}>
                    <h4>Name: {message.fullName}</h4>
                    <h4>Company: {message.companyName}</h4>
                    <h4>Email: {message.email}</h4>
                    <h4>Phone: {message.phone}</h4>
                </div>
                <div className='one-column' key={message.id}>
                    <h4 className='msg-subject'>Subject: {message.subject}</h4>
                    <h4 className='msg-message'>Message:</h4>
                    <div className='one-column_message'>
                        {message.message}
                    </div>
                </div>                
            </div>
        ))

        return msgHtml
    }

    render() {
        if (this.state.loading){
        return (
            <div className='msg-wrapper'>
                <div className='loading'>Loading ...</div>
            </div>
        )
    }
    else {
        return (
            <div className='msg-wrapper'>
                <div className='top-line'>
                    Delete First Message
                </div>
                <div className='icon' onClick={this.handleDeleteClick}>
                    <FontAwesomeIcon icon="trash" />
                </div>
                <div className='refresh-icon' onClick={() => window.location.reload()}>
                    <FontAwesomeIcon icon="redo" />
                </div>
                <div className='msg-grid'>
                    {this.renderMessages()}
                </div>
            </div>
        )
    }
    }
}