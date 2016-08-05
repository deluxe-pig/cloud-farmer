// EditStorageModal.js
import React from 'react'
import styles from './EditStorageModal.css'
import { Link } from 'react-router'
var Modal = require('boron/FadeModal');
var modalStyle = {
  width: '80vw',
}
var EditStorageModal = React.createClass({
  showModal: function(){
    this.refs.modal.show();
  },
  hideModal: function(){
    this.refs.modal.hide();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.showModal}>Add Storage</button>
        <Modal ref="modal" className={styles.modal}>
          <h2>Storage Modal</h2>
          <div>
            <p> Price: $0.0014 </p>
            <p> Storage Remaining: 14GB </p>
            <button> Add more Storage </button>
          </div>
          <button onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    );
  }
});


export default EditStorageModal;
