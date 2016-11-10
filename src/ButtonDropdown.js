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

    var children = this.props.children

    if(this.props.getChildren){
      children = this.props.getChildren(() => {
        this.handleRequestClose()
      })
    }

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
          {children}
        </Popover>
      </div>
    )
  }

}

export default ButtonDropdown