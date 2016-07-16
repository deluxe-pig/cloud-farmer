import React, { Component } from 'react';
import { HeaderBar, HomeBody, HomeSplash, CloudDivider } from './../../components/index';
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
      <div>
      <div className={styles.home}>
        <HeaderBar />
        <HomeSplash />
        <HomeBody />
        <CloudDivider />
      </div>
      <div className="flex-row-sb container">
        <div>
          <h2>What is Cloudfarmer?</h2>
          <p>Cloudfarmer is the easiest way to start farming in the cloud. We provide a dashboard that gives customers full control over their farming nodes, including the ability to add or remove hard drive space and adjust pricing on storage and bandwidth contracts. Cloudfarmer handles the backend administration and uses the collective purchasing power of our customers to get the lowest prices on cloud storage.</p>
        </div>
        <div>
          <h2>What is farming?</h2>
          <p>"Farming" in this context is when one computer rents its hard drive space to other computers in a peer-to-peer market. This term has been popularized by decentralized storage networks such as Maidsafe, StorJ, and Sia.</p>
        </div>
      </div>
      </div>
    );
  }
}
