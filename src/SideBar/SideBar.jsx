import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Image, p, span, Glyphicon} from 'react-bootstrap';
import Table from './Table.jsx';
import axios from 'axios';
import './SideBar.css'


class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableData:
          [
            {'phone_number': '+15109442407', 'read': 'yes'},
            {'phone_number': '+13129331585', 'read': 'no'}
          ]
        }
        this.getData = this.getData.bind(this)

      }
      componentDidMount() {
        
        axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/all_phone_numbers_by_username', {
          username: 'test_user@test_user.com'
        })
        .then(response => {
          console.log(response.data.phone_numbers)
          // this.setState({ tableData: response.data });
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
                      </Col>
                  </Row>
                  <Row>
                    <Table data={this.state.tableData} sendDataFromTableToSideBar={this.getData}/>
                  </Row>
                </Container>
            </div>
        );
      }
    }
    
export { SideBar };