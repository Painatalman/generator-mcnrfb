import React from 'react';

import { storiesOf, action, linkTo } from '@kadira/storybook';

// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// // loads index automatically
// import reducers from '../components/reducers';

import FortuneCookie from '../src/components/FortuneCookie/FortuneCookie';

storiesOf('Expense Form', module)
  .add('Default', () => (
      <FortuneCookie/>
  )).add('Custom starting language', () => (
      <FortuneCookie language='pt' />
  )).add('Custom Data', () => (
      <FortuneCookie quoteObject={
        {
          pt: ["adsa asd", "asdas as"],
          es: ["asdas daso", "asdas aa", "das"],
          fr: ["casd a", "dd", "aa a"]
        }
      }/>
  ));

