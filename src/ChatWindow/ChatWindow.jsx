import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import './react-chatbox-component/dist/style.css';
import {ChatBox} from './react-chatbox-component/dist/';  
import axios from 'axios';
import { number } from 'prop-types';
import "./ChatWindow.css"

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
      phone_number: number,
      value:''
    };
    this.newSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeConversation = this.closeConversation.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var message = this.state.value;
    this.onSubmit(message);
    this.setState({ value: '' });
  }
   onSubmit = function(message){
    console.log(message);
    var joined = this.state.messages.concat({
      "text": this.state.value,
      "id": "9",
      "sender": {
        "name": "Ironman",
        "uid": "user1",
        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    })
    this.setState({ messages: joined })

    axios({
      method: 'post',
      url: 'http://a2f25d0b.ngrok.io/message_sent_by_user',
      data: {
        'conversation_id': 110,
        'body': message , 
        'phone_number': this.state.phone_number
      },
      headers:{
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      
    })
      .then(function (response) {
        console.log(response)
      });

    
  }

  closeConversation = function(){axios({
    method: 'post',
    url: 'http://a2f25d0b.ngrok.io/conversation_closed_by_user',
    data: {
      "conversation_id": 110
    },
    headers:{
      "Content-Type" : "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    
  })
    .then(function (response) {
      console.log(response)
    });

  }


  componentDidMount() {
    this.setState({ messages: this.props.messages, user: this.props.user });
    console.log(this.props.newmessages)
  }

  render() {
    return (
      <div className='container' style={{maxWidth: '1000px', paddingTop: '50px'}}>
        <ChatBox messages={this.state.messages} />
        <form onSubmit={this.handleSubmit}>
          <input
            type = 'text'
            className = 'form-control message-input'
            placeholder = 'Type something'
            value = {this.state.value}
            onChange={this.handleChange}
          />
        </form>
        
      </div>
    )
  }
}

export { ChatWindow };
