import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button, Container, Row, Col} from 'react-bootstrap';

class Notes extends Component {
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
              <Button>Notes</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Notes };
