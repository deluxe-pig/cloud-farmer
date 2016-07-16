// SimpleMeter.js
import React, { Component } from 'react';
import styles from './SimpleMeter.css';
import { Link } from 'react-router';

export default class SimpleMeter extends Component {
  render() {
    return (
      <div>
        <div className={styles.meter}>
          <span className={styles.progress}></span>
        </div>
      </div>
    );
  }
}
