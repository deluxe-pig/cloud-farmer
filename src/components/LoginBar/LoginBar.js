// LoginBar.js
import styles from './LoginBar.css';

import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginBar}> 
        <h1>Login</h1>
        <form>
        <input type="text" name="email"> </input>
        <input type="text" name="password"> </input>
        </form>
        <button> Login </button>
      </div>
    );
  }
}
