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
    this.closeConversation = this.closeConversation.bind(this)
    
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
    this.setState({ showChatwindow: true });
  }

  closeConversation = function(){
    axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/conversation_closed_by_user',{
      "conversation_id": this.state.conversation_id
    }).then(response =>{
      this.setState({showChatwindow: false})
    }).catch(function (error) {
      console.log(error);
    });  
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
                  <Container>
                    <Row style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    {this.state.showChatwindow ?
                    <Button variant="danger" onClick={this.closeConversation}>Close chat</Button> 
                    :null}
                    </Row>
                  </Container>
                  { this.state.showChatwindow ?<ChatWindow messages={this.state.messages} 
                  phone_number = {this.state.phone_number} conversation_id = {this.state.conversation_id} user={this.state.user}/> : null}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export { Home };
