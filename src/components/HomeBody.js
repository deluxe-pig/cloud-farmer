import React, { Component } from 'react';

export default class HomeBody extends Component {
  render() {
    return (
      <div className="flex">
        <h1>CloudFarmer</h1>
        <span>Earn money by renting cloud storage space.</span>
        <input type="button" value="Call to Action" />
      </div>
    );
  }
}
