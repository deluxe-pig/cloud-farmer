import React, { Component } from 'react';
import styles from './HeaderBar.css';
import { Link } from 'react-router';
import logo from './../../assets/cloudfarmer-logo-1.svg';

export default class HeaderBar extends Component {
  render() {
    return (
      <div className={styles.headerbar}>
        <div className="container flex-row-sb">
          
          <Link to='/home'>
            <img src={logo} className={styles.logo} />
          </Link>
          
          <div className={'flex-row-sb ' + styles.loginSignup}>
            
            <Link className={styles.link} to='/login'>
            <span className={styles.headerbarItem}>login</span>
            </Link>
            
            <Link className={styles.link} to='/login'>
            <span className={styles.headerbarItem}>signup</span>
            </Link>
          </div>
        </div>
      </div>  
    );
  }
}
