// LoginBar.js
import styles from './LoginBar.css';

import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginBar}> 
        <h1 className={styles.loginTitle}>Login</h1>
        <div className={styles.formContainer}>
          <form>
            <input className={styles.formEntry} type="text" name="email"> </input>
            <input className={styles.formEntry} type="text" name="password"> </input>
            <button className={styles.formButton}> Login </button>
          </form>
        </div>
      </div>
    );
  }
}
