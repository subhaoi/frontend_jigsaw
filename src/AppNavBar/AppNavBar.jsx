import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './AppNavBar.css'
class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Navbar className = "blue" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="ActiveIcon" href="/">Chat</Nav.Link>
                {/* <Nav.Link href="/customerinfo">Customer Info</Nav.Link>
                <Nav.Link href="/documents">Documents</Nav.Link>
                <Nav.Link href="/notes">Notes</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export { AppNavBar };

