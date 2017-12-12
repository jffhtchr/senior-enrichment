'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {connect} from "react-redux"; //connect()(Main) => injects props into main. first parens is the configuration. 
import store from './store';
import Root from './components/Root';

render(
  <Provider store={store}> 
    <Root/>
  </Provider>,
  document.getElementById('main')
);