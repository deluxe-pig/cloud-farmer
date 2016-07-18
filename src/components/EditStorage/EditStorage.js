// EditStorage.js
import React, { Component } from 'react'
import styles from './EditStorage.css'
import { Link } from 'react-router'
import { EditStorageModal } from '../index.js'

export default class EditStorage extends Component {
  render() {
    return (
      <div className={styles.editStorageContainer}>
        <h1 className={styles.editStorageTitle}> </h1>
        <EditStorageModal />
      </div>  
    );
  }
}
