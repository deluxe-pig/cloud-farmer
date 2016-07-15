import React, { Component } from 'react';
import styles from './Home.css';

/* Main splash component of the homepage */
export default class HomeSplash extends Component {
  render() {
    return (
      <div className={styles.homeBody}>
        <div className={styles.splashContent}>
          <div className={styles.splashHeader}>
            <h1>cloudfarmer</h1>
            <p>Earn money by renting cloud storage space.</p>
          </div>
          <input type="button" value="Call to Action" className="btn" />
        </div>
      </div>
    );
  }
}
