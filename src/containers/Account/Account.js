// Account.js

import React, { Component } from 'react';
import { HeaderBar, LgTextBody, EditStorage } from '../../components';
import { StorageUsage } from '../index.js'
import styles from './Account.css';

export default class Account extends Component {
  render() {
    return (
      <div className={styles.accountRoot}>
        <HeaderBar />
        <div>
          <StorageUsage />
        </div>
        <div>
          <EditStorage />
        </div>

      </div>
    );
  }
}
