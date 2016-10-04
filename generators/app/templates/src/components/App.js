import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home}/>
          <Route path='about' component={About}/>
        </Route>
      </Router>
    );
  }
}
