import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { SideBar } from '../SideBar';
import { ChatWindow } from '../ChatWindow';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <Container fluid>
            <Row>
              <Col md="3">
                <SideBar />
              </Col>
              <Col>
                <AppNavBar />
                <ChatWindow />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export { Home };
