import React, { Component } from 'react';
import styles from './Home.css';

/* Main splash component of the homepage */
export default class HomeSplash extends Component {
  render() {
    return (
      <div className={[styles.homeBody]}>
        <h1>CloudFarmer</h1>
        <p>Earn money by renting cloud storage space.</p>
        <input type="button" value="Call to Action" className="btn" />
      </div>
    );
  }
}
