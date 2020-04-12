import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import 'react-chatbox-component/dist/style.css';
import {ChatBox} from 'react-chatbox-component';  
import axios from 'axios';
import { number } from 'prop-types';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
      phone_number: number
    };
    this.newSubmit = this.onSubmit.bind(this);
  }
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }
   onSubmit = function(message){
    var joined = this.state.messages.concat({
      "text": message,
      "id": "9",
      "sender": {
        "name": "Ironman",
        "uid": "user1",
        "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    })
    this.setState({ messages: joined })
    console.log(message);

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


  componentDidMount() {
    
    const messages = [
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "3",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "4",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "5",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "6",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "7",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Stark, how are you today?",
        "id": "8",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
    ];

    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });

  }

  render() {
    return (
      <div className='container' style={{maxWidth: '1000px', paddingTop: '50px'}}>
        <ChatBox messages={this.state.messages} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export { ChatWindow };
