import React, { Component } from 'react';

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="flex">
        <h1 className="logo">CloudFarmer</h1>
        <span>login</span>
        <span>signup</span>
        <span>settings</span>
        <span>profile</span>
        <span>contact</span>
      </div>  
    );
  }
}
