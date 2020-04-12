import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Image, p, span, Glyphicon} from 'react-bootstrap';
import Table from './Table.jsx';
import axios from 'axios';
import './SideBar.css'


class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableData:[
            {'user': 'user1', 'read': 'no'}],};
        
        this.phoneNumberClicked = this.phoneNumberClicked.bind(this);
        this.openConversation = this.openConversation.bind(this);
        this.closeConversation = this.closeConversation.bind(this);

      }
      componentDidMount() {
        axios({
          method: 'post',
          url: 'http://a2f25d0b.ngrok.io/all_phone_numbers_by_username',
          data :{
            username: 'test_user@test_user.com'
          },
          headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }).then(function (response) {
            console.log(response)
          });

          axios({
            method: 'post',
            url: 'http://a2f25d0b.ngrok.io/conversation_opened_by_user',
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

      phoneNumberClicked = function(){ axios({
        method: 'post',
        url: 'http://a2f25d0b.ngrok.io/all_messages_for_phone_number_and_username',
        data: {
          "username": "test_user@test_user.com",
          "phone_number": this.state.clicked_number
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

      openConversation = function(){axios({
        method: 'post',
        url: 'http://a2f25d0b.ngrok.io/conversation_opened_by_user',
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

      render() {
        return (
            <div>
                <Container>
                  <Row>
                      <Col>
                          <Image src="https://loremflickr.com/50/50" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <a className="float-right">Plus Button</a>
                      </Col>
                  </Row>
                  <Row>
                    <Table data={this.state.tableData}/>
                  </Row>
                </Container>
            </div>
        );
      }
    }
    
export { SideBar };