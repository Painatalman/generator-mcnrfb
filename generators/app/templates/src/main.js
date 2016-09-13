import React from 'react';
import { render } from 'react-dom';

import App from './components/App.js';

// ReactDOM.render version of render
render(
  <App name='<%= name %>' description='<%= description %>'></App>,
  document.getElementById('app')
);
