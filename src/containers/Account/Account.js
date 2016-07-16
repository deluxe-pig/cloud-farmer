// Account.js

import React, { Component } from 'react';
import { HeaderBar, LgTextBody, SimpleMeter } from '../../components';
import styles from './Account.css';

export default class Faq extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div>
          <SimpleMeter />
        </div>
      </div>
    );
  }
}
