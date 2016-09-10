import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import Home from './pages/Home.js';

class App extends Component {
  render() {
    return (<Home style={this.props.styles} name={this.props.name} description={this.props.description}></Home>);
  }
}

// ReactDOM.render version of render
render(
  <App name='<%= name %>' description='<%= description %>'></App>,
  document.getElementById('app')
);
