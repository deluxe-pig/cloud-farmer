import React, { Component } from 'react';
import { LoginBar, SimpleHeader } from '../../components';
import styles from './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginPage}>
        <SimpleHeader />
        <div className={styles.loginBar}>
          <LoginBar />
        </div>  
      </div>
    );
  }
}
