// Faq.js

import React, { Component } from 'react';
import { HeaderBar, LgTextBody } from '../../components';
import styles from './Faq.css';

export default class Faq extends Component {
  render() {
    return (
      <div className={styles.faq}>
        <HeaderBar />
        <div>
          <LgTextBody />
        </div>
      </div>
    );
  }
}
