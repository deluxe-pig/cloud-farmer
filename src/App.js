import React, { Component } from 'react';
import { Login, Home } from './containers';

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Home />
      </div>  
    );
  }
}
