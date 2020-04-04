import React, { Component } from 'react';
import { AppNavBar } from '../AppNavBar';
import { Button } from 'react-bootstrap';

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppNavBar/>
        <Button>CustomerInfo</Button>
      </div>
    );
  }
}

export { CustomerInfo };
