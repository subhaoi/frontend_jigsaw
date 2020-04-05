import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';

class CustomerInfo extends Component {
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
            </Col>
            <Col>
              <AppNavBar />
              <Button>CustomerInfo</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { CustomerInfo };
