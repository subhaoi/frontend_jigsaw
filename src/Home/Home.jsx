import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { SideBar } from '../SideBar';
import { ChatWindow } from '../ChatWindow';
import { number, string} from 'prop-types';
import "./Home.css"
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatwindow: false,
      messages :[],
      user: {
        "uid": "user1"
      },
      phone_number:string,
      conversation_id:number,
      new_phone_number: string

    };
    this.getData = this.getData.bind(this)
    this.onClick = this.onClick.bind(this)
    this.getData2 = this.getData2.bind(this)
    this.getData3 = this.getData3.bind(this)
    this.getData4 = this.getData4.bind(this)   
  }

  getData(val){
    this.onClick(val)  
  }

  getData2(val){
    this.setState({phone_number:val['phone_number'], conversation_id:val['conversation_id']})
  }
  getData3(val){
    this.setState({phone_number:val, conversation_id: '', messages:[], showChatwindow:true})
  }
  getData4(val){
    this.setState({showChatwindow: val})
  }
  onClick = function(val) {
    this.setState({messages : [],showChatwindow: false})
    let a = (Object.values(val)[0])
    let formattedMessages = []
    for (let value of Object.values(a)) {
      // console.log(value.owner);
      if(value.owner == 'rxil'){
        var dictStructure =  {
                "text": value.body,
                "id": value.id,
                "sender": {
                  "name": value.owner,
                  "uid": "user1",
                  "avatar": "https://i.ibb.co/27wyhhN/f.jpg",
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
                  "avatar": "https://i.ibb.co/b77Q0K4/c.jpg",
                }
              }
      }  
      formattedMessages.unshift(dictStructure)
    }

    this.setState({messages : formattedMessages})
    this.setState({ showChatwindow: true });
  }

  render() {
    return (
        <div>
          <Container fluid className="fullscreen">
            <Row>
              <Col md="3">
                <SideBar 
                sendDataFromSideBarToHome={this.getData} 
                sendDataFromSideBarToHome2={this.getData2}
                sendNewNumber={this.getData3}
                />
              </Col>
              <Col>
                {/* <AppNavBar /> */}
                <div className="lightblue">
                  { this.state.showChatwindow ?<ChatWindow messages={this.state.messages} 
                  phone_number = {this.state.phone_number} 
                  conversation_id = {this.state.conversation_id} 
                  user={this.state.user} closeChat={this.getData4}/> : null}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export { Home };
