import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Image, p, span, Glyphicon} from 'react-bootstrap';

class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {};
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
                      
                  </Row>
                </Container>
            </div>
        );
      }
    }
    
export { SideBar };