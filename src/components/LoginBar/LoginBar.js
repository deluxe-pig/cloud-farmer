// LoginBar.js
import styles from './LoginBar.css';

import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginBar}> 
        <h1 className={styles.loginTitle}>Log In</h1>
        <div>
          <form className={styles.formInputContainer}>
            <div className={styles.formEmail}>
              <label> Email Address </label>
              <input className={styles.formInput} type="text" name="email"> </input>
            </div>
            <div className={styles.formInputContainer}>
              <label> Password </label>
              <input className={styles.formInput} type="password" name="password"> </input>
            </div>
            <button className={styles.formButton}> Log In </button>
          </form>
        </div>
      </div>
    );
  }
}
