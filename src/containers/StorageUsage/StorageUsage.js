// StorageUsage.js
import React, { Component } from 'react';
import { SimpleMeter } from '../../components';
import styles from './StorageUsage.css';

export default class StorageUsage extends Component {
  render() {
    return (
      <div className={styles.storageContainer}>
        <h2 className={styles.storageTitle}> Storage Rented </h2>
        <SimpleMeter />
        <h2 className={styles.storageTitle}> Storage Used </h2>
        <SimpleMeter />
      </div>
    );
  }
}