import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Image} from 'react-bootstrap';
import Table from './Table.jsx';
import axios from 'axios';
import './SideBar.css'


class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableData:
          [
            {'phone_number': '+15109442407', 'seen': 'yes'},
          ],
          displayForm: false,
          value: ''
        }
        this.getData = this.getData.bind(this)
        this.getData2 = this.getData2.bind(this)
        this.getPhoneNumber = this.getPhoneNumber.bind(this)
        this.startNewChat = this.startNewChat.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
      componentDidMount() {
        
        axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/all_phone_numbers_by_username', {
          username: 'test_user@test_user.com'
        })
        .then(response => {
          this.setState({ tableData: response.data.phone_numbers });
        })
        .catch(function (error) {
          console.log(error);
        });
        this.interval = setInterval(() => this.getPhoneNumber(), 3000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      getPhoneNumber() {
        
        axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/all_phone_numbers_by_username', {
          username: 'test_user@test_user.com'
        })
        .then(response => {
          this.setState({ tableData: response.data.phone_numbers });
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }

      getData(val){
        // do not forget to bind getData in constructor
        // console.log(val);
        this.props.sendDataFromSideBarToHome(val)
    }
    getData2(val){
      // do not forget to bind getData in constructor
      this.props.sendDataFromSideBarToHome2(val)
  }

  startNewChat = function(){
    this.setState({displayForm : true})
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var message = this.state.value;
    // this.onSubmit(message);
    this.props.sendNewNumber(message)
    this.setState({ value: '' , displayForm:false});
  }

      render() {
        return (
            <div>
                <Container className="fullscreen">
                  <Row>
                      <Col>
                          <Image src="https://via.placeholder.com/50x50.png?text=Jigsaw" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Row style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                      
                      {this.state.displayForm ? 
                        <form onSubmit={this.handleSubmit}>
                        <input
                          type = 'text'
                          placeholder = 'Enter New Number'
                          className = 'inputclass'
                          value = {this.state.value}
                          onChange={this.handleChange}
                        />
                      </form>
                        : <Button className='buttonclass' onClick={this.startNewChat}>New Conversation</Button>
                        }
                      </Row>
                        
                      </Col>
                  </Row>
                  <Row>
                    <Table data={this.state.tableData} sendDataFromTableToSideBar={this.getData} sendIDandNumber={this.getData2}/>
                  </Row>
                </Container>
            </div>
        );
      }
    }
    
export { SideBar };