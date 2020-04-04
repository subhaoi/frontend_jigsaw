import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button } from 'react-bootstrap';

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <AppNavBar/>
          <Button>Documents</Button>
        </div>
    );
  }
}

export { Documents };
