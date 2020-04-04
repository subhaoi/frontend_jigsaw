import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
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
          <Route exact path='/customerinfo' component={CustomerInfo}/>
          <Route exact path='/documents' component={Documents}/>
          <Route exact path='/notes' component={Notes}/>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export { App };
