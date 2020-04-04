import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button } from 'react-bootstrap';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppNavBar/>
        <Button>Notes</Button>
      </div>
    );
  }
}

export { Notes };
