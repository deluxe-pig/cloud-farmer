// StorageUsage.js
import React, { Component } from 'react';
import { EditStorageModal } from '../../components';
import styles from './StorageUsage.css';

export default class StorageUsage extends Component {
  render() {
    return (
      <div className={styles.storageContainer}>
        <h2 className={styles.storageTitle}> Storage Rented:</h2>
        <h2>127 TB</h2>
        <h2 className={styles.storageTitle}> Storage Used:</h2>
        <h2>8.5 TB</h2>
        <div className={styles.editStorageModal}>
          <EditStorageModal />
        </div>
      </div>
    );
  }
}