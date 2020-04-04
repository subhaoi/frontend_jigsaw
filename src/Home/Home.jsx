import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <AppNavBar/>
          <Button>Home</Button>
        </div>
    );
  }
}

export { Home };
