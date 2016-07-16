// LgTextBody.js
import React, { Component } from 'react'

import styles from './LgTextBody.css'

export default class LgTextBody extends Component {
  render() {
    return (
      <div> 
        <h1 className={styles.title}> FAQ </h1>

        <div className={styles.bodyContainer}>
          <h2 className={styles.bodyHeader}> What is Cloudfarmer? </h2>
          <p className={styles.bodyText}>
          Cloudfarmer is the easiest way to start farming in the cloud. We provide a dashboard that gives customers full control over their farming nodes, including the ability to add or remove hard drive space and adjust pricing on storage and bandwidth contracts. Cloudfarmer handles the backend administration and uses the collective purchasing power of our customers to get the lowest prices on cloud storage.
          </p>

          <h2 className={styles.bodyHeader}>What is farming?</h2>
          <p className={styles.bodyText}>
          "Farming" in this context is when one computer rents its hard drive space to other computers in a peer-to-peer market. This term has been popularized by decentralized storage networks such as Maidsafe, StorJ, and Sia.
          </p>

          <h2 className={styles.bodyHeader}>What network does Cloudfarmer use?</h2>
          <p className={styles.bodyText}>
          Cloudfarmer currently supports farming on the StorJ network.
          </p>

          <h2 className={styles.bodyHeader}>What is Storjcoin X?</h2>
          <p className={styles.bodyText}>
          Storjcoin X is the digital token that is used to pay StorJ farmers. This token was issued on the Bitcoin blockchain using the Counterparty protocol. Storjcoin X has its own market price and can be exchanged for bitcoin right from the Cloudfarmer Dashboard.
          </p>

          <h2 className={styles.bodyHeader}>What payment methods does Cloudfarmer support?</h2>
          <p className={styles.bodyText}>
          Cloudfarmer only accepts Bitcoin payments at this time. Customers can use an instant exchange like ShapeShift to pay with over two dozen different altcoins and digital assets.
          </p>

          <h2 className={styles.bodyFooter}>Have a question that isn't answered here? Send us a support request and we'll get back to you as soon as possible.</h2>
        </div>
      </div>
    );
  }
}
