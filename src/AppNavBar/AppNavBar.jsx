import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Chat</Nav.Link>
                <Nav.Link href="/customerinfo">Customer Info</Nav.Link>
                <Nav.Link href="/documents">Documents</Nav.Link>
                <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export { AppNavBar };

