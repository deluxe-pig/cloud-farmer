import React, { Component } from 'react';
import { LoginBar, HeaderBar } from '../../components';
import styles from './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        {/*<HeaderBar />*/}
        <div className={styles.loginRoot}>
          <LoginBar />
        </div>  
      </div>
    );
  }
}
