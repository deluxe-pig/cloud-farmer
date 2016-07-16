import React, { Component } from 'react';
import styles from './Home.css';
import cloudfarmerBg from './../../assets/cloudfarmer-bg-1.svg';

/* Main splash component of the homepage */
export default class CloudDivider extends Component {
  render() {
    return (
      <div className={styles.clouds}>
        <img src={cloudfarmerBg} className={styles.bgClouds} />
      </div>
    );
  }
}
