import React, { Component } from 'react';
import { Faq, Login, Home } from './containers';
import { Router, Route, hashHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/faq' component={Faq}/>
      </Router>
    );
  }
}
