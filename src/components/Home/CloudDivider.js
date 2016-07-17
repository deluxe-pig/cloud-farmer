import React, { Component } from 'react';
import styles from './Home.css';
import cloudfarmerBg from './../../assets/cloudfarmer-bg-1.svg';

/* Cloud divider on the bottom of the HomeSplash component */
export default class CloudDivider extends Component {
  render() {
    return (
      <div className={styles.clouds}>
        <img src={cloudfarmerBg} className={styles.bgClouds} />
      </div>
    );
  }
}
