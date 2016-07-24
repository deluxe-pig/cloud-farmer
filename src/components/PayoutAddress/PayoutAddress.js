// PayoutAddress.js
import React, { Component } from 'react';
import styles from './PayoutAddress.css';
import { Link } from 'react-router';

export default class SimpleMeter extends Component {
  render() {
    return (
      <div>
        <div className={styles.payoutContainer}>
          <h1> Payout Address: </h1>
          <p className={styles.payoutAddress}> HqjXkj7X9oiQUxroqjkO19KXqjklx </p>
          <button className={styles.changePayoutAddress}> Change Payout Address </button>
        </div>
      </div>
    );
  }
}
