import React, { Component } from 'react';
import { HeaderBar, HomeBody } from './../../components/index';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <HomeBody />
      </div>  
    );
  }
}
