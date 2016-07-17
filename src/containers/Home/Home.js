import React, { Component } from 'react';
import { HeaderBar, HomeBody, HomeSplash, CloudDivider } from './../../components/index';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.home}>
          <HeaderBar />
          <HomeSplash />
          <CloudDivider />
        </div>
        <HomeBody />
      </div>
    );
  }
}
