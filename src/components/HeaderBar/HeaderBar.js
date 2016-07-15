import React, { Component } from 'react';
import styles from './HeaderBar.css';

export default class HeaderBar extends Component {
  render() {
    return (
      <div>
        <div className={"container flex-row-sb " + styles.headerbar}>
          <h1 className="logo">CloudFarmer</h1>
          <div className="flex-row-sb">
            <span className={styles.headerbarItem}>login</span>
            <span className={styles.headerbarItem}>signup</span>
          </div>
        </div>
      </div>  
    );
  }
}
