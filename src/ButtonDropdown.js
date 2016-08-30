import React, { PropTypes, Component } from 'react'
import Popover from 'material-ui/Popover'

class ButtonDropdown extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  componentWillReceiveProps = (newProps) => {
    if(newProps.timestamp!=this.props.timestamp){
      this.handleRequestClose()
    }
  }

  render() {

    var ButtonClass = this.props.buttonclass
    var buttonprops = Object.assign({}, this.props.buttonprops, {
      onTouchTap:this.handleTouchTap
    })

    return (
      <div>
        <ButtonClass {...buttonprops} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          {this.props.children}
        </Popover>
      </div>
    )
  }

}

export default ButtonDropdown