// SimpleHeader.js
import React, { Component } from 'react';
// import styles from './HeaderBar.css';
import { Link } from 'react-router';

export default class SimpleHeader extends Component {
  render() {
    return (
      <div>
          <Link to='/home'>
          <h1 className="logo">CloudFarmer</h1>
          </Link>
      </div>  
    );
  }
}
