import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Button>Documents</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Documents };
