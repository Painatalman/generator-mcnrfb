import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <Layout {...props}><Home {...props}></Home></Layout>}>
          </Route>
          <Route path='/about' render={(props) => <Layout {...props}><About></About></Layout>}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
