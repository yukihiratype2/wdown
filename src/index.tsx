import React from 'react';
import { render } from 'react-dom';
import './app.global.scss';
import Root from './container/Root';

render(
  <Root />,
  document.querySelector('#root'),
);
