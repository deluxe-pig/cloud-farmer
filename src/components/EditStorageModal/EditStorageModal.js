// EditStorageModal.js
import React from 'react'
import styles from './EditStorageModal.css'
import { Link } from 'react-router'
var Modal = require('boron/FadeModal');

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
        <Modal ref="modal">
          <h2>Add More Storage Modal here!</h2>
          <button onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    );
  }
});


export default EditStorageModal;
