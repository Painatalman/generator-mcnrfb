import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
      <h1><%= name %></h1>
      <p>
        <%= description %>
      </p>
      </div>)
  }
}
