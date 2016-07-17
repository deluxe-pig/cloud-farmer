import React, { Component } from 'react';
import styles from './Home.css';
import storageImg from './../../assets/cloud-storage-1.svg';

export default class HomeBody extends Component {
  constructor() {
    super();
    this.state = {
      gbs: 40
    };
    var changeGb = () => {
      var increaseGb = () => {
        if (this.state.gbs >= 139) {
          clearInterval(gbInterval);
        }
        this.setState({gbs: this.state.gbs + 1});
      };
      var gbInterval = setInterval(increaseGb, 30);
    };
    setTimeout(changeGb, 2000);
  }
  render() {
    return (
      <div className={"container " + styles.descriptionsContainer}>
        <div className="flex-row">
          <div>
            <h2 className={styles.lineHeader}>What is Cloudfarmer?</h2>
            <p className={styles.lineP}>Cloudfarmer is the easiest way to start farming in the cloud. We provide a dashboard that gives customers full control over their farming nodes, including the ability to add or remove hard drive space and adjust pricing on storage and bandwidth contracts. Cloudfarmer handles the backend administration and uses the collective purchasing power of our customers to get the lowest prices on cloud storage.</p>
          </div>
          <div className={styles.descriptionImgContainer}>
            <div className={styles.descriptionImg}>
              <div className={styles.gb}>
                <h2 className="font-100 inline font-white font-size-40">{this.state.gbs}</h2><span className="font-white">GB</span>
              </div>
              <img src={storageImg} className={styles.storageImg} />
            </div>
            <div className="container-2">
              <h2 className="font-100">Hey</h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.lineHeader}>What is farming?</h2>
          <p className={styles.lineP}>"Farming" in this context is when one computer rents its hard drive space to other computers in a peer-to-peer market. This term has been popularized by decentralized storage networks such as Maidsafe, StorJ, and Sia.</p>
        </div>
      </div>
    );
  }
}
