import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Grid } from './Grid'

it('renders app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders grid without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><Grid /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});