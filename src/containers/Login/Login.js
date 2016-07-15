import React, { Component } from 'react';
import { LoginBar } from '../../components';
import styles from './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginRoot}>
        <LoginBar />
      </div>  
    );
  }
}
