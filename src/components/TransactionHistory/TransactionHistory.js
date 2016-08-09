// TransactionHistory.js
import React, { Component } from 'react';
import styles from './TransactionHistory.css';
import { Link } from 'react-router';

export default class TransactionHistory extends Component {
  render() {
    return (
      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          Headerbar goes here
        </div>
        <div className={styles.transactionsBody}>
          transactions go here
        </div>
      </div>
    );
  }
}
