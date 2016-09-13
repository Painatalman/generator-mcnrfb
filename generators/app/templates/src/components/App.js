import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import Home from './pages/Home.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}
