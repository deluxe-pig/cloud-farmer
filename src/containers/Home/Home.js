import React, { Component } from 'react';
import { HeaderBar, HomeBody, HomeSplash } from './../../components/index';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <HomeSplash />
        <HomeBody />
      </div>  
    );
  }
}
