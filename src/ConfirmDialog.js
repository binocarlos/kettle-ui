import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class ConfirmDialog extends Component {

  render() {

    return (
      <Dialog
        actions={[
          <FlatButton
            label={this.props.cancelTitle || "Cancel"}
            primary={false}
            onTouchTap={this.props.onClose}
          />,
          <FlatButton
            label={this.props.confirmTitle || "Confirm"}
            primary={true}
            onTouchTap={this.props.onConfirm}
          />,
        ]}
        modal={this.props.isModal}
        open={this.props.isOpen}
        onRequestClose={this.props.onClose}
      >
        {this.props.children}
      </Dialog>
    )
  }

}