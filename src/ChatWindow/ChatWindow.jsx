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
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.retrieveMessagesAgain = this.retrieveMessagesAgain.bind(this);
    this.formattAllMessages = this.formattAllMessages.bind(this);
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
    if(this.state.messages.length > 0){
      axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/message_sent_by_user', {
      'conversation_id': this.props.conversation_id,
      'body': message , 
      'phone_number': this.props.phone_number
      })
      .then(response => {
      console.log(response.data)
      this.retrieveMessagesAgain(this.props.phone_number)

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(this.state.messages.length == 0){
      axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/message_sent_by_user', {
      'conversation_id': "",
      'body': message , 
      'phone_number': this.props.phone_number,
      'new_conversation': true
      })
      .then(response => {
      console.log(response.data)
      console.log(this.props.phone_number)
      this.retrieveMessagesAgain(this.props.phone_number)

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  }

  formattAllMessages = function(val) {
    this.setState({messages : []})

    let a = (Object.values(val)[0])
    let j =0
    let formattedMessages = []
    for (let value of Object.values(a)) {
      // console.log(value.owner);
      j++
      if(value.owner == 'rxil'){
        var dictStructure =  {
                "text": value.body,
                "id": value.id,
                "sender": {
                  "name": value.owner,
                  "uid": "user1",
                  "avatar": "https://image.flaticon.com/icons/svg/12/12605.svg",
                }
              }
      }
      else if(value.owner == 'customer') {
        var dictStructure =  {
                "text": value.body,
                "id": value.id,
                "sender": {
                  "name": value.owner,
                  "uid": "user2",
                  "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
                }
              }
      }
      
      formattedMessages.unshift(dictStructure)
    }

    this.setState({messages : formattedMessages})
  }

  retrieveMessagesAgain = function(phone_number){ 
    axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/all_messages_for_phone_number_and_username', {
        username: 'test_user@test_user.com',
        "phone_number": phone_number
      })
      .then(response => {
        var receivedmessages = response.data.messages
        this.formattAllMessages(receivedmessages)

      })
      .catch(function (error) {
        console.log(error);
      });

  }

  componentDidMount() {
    this.setState({ messages: this.props.messages, user: this.props.user });
    this.interval = setInterval(() =>  this.retrieveMessagesAgain(this.props.phone_number) , 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
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
