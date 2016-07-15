import React, { Component } from 'react';
import styles from './HeaderBar.css';
import { Link } from 'react-router';

export default class HeaderBar extends Component {
  render() {
    return (
      <div className={styles.headerbar}>
        <div className="container flex-row-sb">
          
          <Link to='/home'>
          <h1 className="logo">CloudFarmer</h1>
          </Link>
          
          <div className="flex-row-sb">
            
            <Link to='/login'>
            <span className={styles.headerbarItem}>login</span>
            </Link>
            
            <Link to='/login'>
            <span className={styles.headerbarItem}>signup</span>
            
            </Link>
          </div>
        </div>
      </div>  
    );
  }
}
