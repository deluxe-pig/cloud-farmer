// SimpleHeader.js
import React, { Component } from 'react';
import styles from './SimpleHeader.css';
import { Link } from 'react-router';
import logo from './../../assets/cloudfarmer-1.svg';

export default class SimpleHeader extends Component {
  render() {
    return (
      <div className={styles.simpleHeader} >
          <Link to='/home'>
          <img src={logo} className={styles.logo} />
          </Link>
      </div>  
    );
  }
}
