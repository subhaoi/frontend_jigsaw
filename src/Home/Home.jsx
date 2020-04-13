import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { SideBar } from '../SideBar';
import { ChatWindow } from '../ChatWindow';
import "./Home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages :[
        {
          "text": "Hello there",
          "id": "1",
          "sender": {
            "name": "Ironman",
            "uid": "user1",
            "avatar": "https://image.flaticon.com/icons/svg/12/12605.svg",
          },
        },
        {
          "text": "Hi Mr. Stark",
          "id": "2",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "3",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "4",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "5",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "6",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "7",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
        {
          "text": "Hello Stark, how are you today?",
          "id": "8",
          "sender": {
            "name": "Spiderman",
            "uid": "user2",
            "avatar": "https://image.flaticon.com/icons/svg/503/503013.svg",
          },
        },
      ],
  
      user: {
        "uid": "user1"
      },

      newmessages:{}
    };
  }

  getData(val){
    // do not forget to bind getData in constructor
    console.log(val);
    // this.props.sendDataFromSideBarToHome(val)
    // this.setState({newmessages : val})
}

  render() {
    return (
        <div>
          <Container fluid>
            <Row>
              <Col md="3">
                <SideBar sendDataFromSideBarToHome={this.getData}/>
              </Col>
              <Col>
                <AppNavBar />
                <div className="lightblue">
                <ChatWindow messages={this.state.messages} newmessages={this.state.newmessages} user={this.state.user}/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export { Home };
