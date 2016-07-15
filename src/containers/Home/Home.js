import React, { Component } from 'react';
import { HeaderBar, HomeBody, HomeSplash } from './../../components/index';
import styles from './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      classes: [styles.home]
    };
  }
  render() {
    return (
      <div className={styles.home}>
        <HeaderBar />
        <HomeSplash />
        <HomeBody />
      </div>  
    );
  }
}
