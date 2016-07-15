import React, { Component } from 'react';
import { LoginBar, HeaderBar } from '../../components';
import styles from './Login.css';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className={styles.signupRoot}>
          <LoginBar />
        </div>  
      </div>
    );
  }
}
