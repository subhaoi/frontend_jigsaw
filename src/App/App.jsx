import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { CustomerInfo } from '../CustomerInfo';
import { Documents } from '../Documents';
import { Notes } from '../Notes';
import { Home } from '../Home';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/customerinfo' component={CustomerInfo}/>
          <Route path='/documents' component={Documents}/>
          <Route path='/notes' component={Notes}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export { App };
