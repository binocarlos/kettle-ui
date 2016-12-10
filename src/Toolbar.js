import React, { Component, PropTypes } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ButtonRow from './ButtonRow'

const STYLES = {
  leftSeperator:{
    width:'25px',
    display:'inline-block'
  }
}


class KettleToolbar extends Component {

  render() {

    return (
      <Toolbar>
        <ToolbarGroup key={1}>
          {
            this.props.icon ? (
              <IconButton 
                // a small adjustment so the icon lines up with the ToolbarTitle
                style={{
                  marginTop:3
                }}
                disabled={true}>
                {this.props.icon}
              </IconButton>
            ) : null
          }
          {
            this.props.title ? (
              <ToolbarTitle text={this.props.title} />
            ) : null
          }
          {
            (this.props.title || this.props.icon) ? (
              <ToolbarSeparator />
            ) : null
          }

          <div style={STYLES.leftSeperator}></div>

          <ButtonRow buttons={this.props.leftbuttons} />
          
          {this.props.children}
        
        </ToolbarGroup>

        <ToolbarGroup key={2}>
          {
            this.props.rightChildren
          }
          <ButtonRow buttons={this.props.rightbuttons} />
       
        </ToolbarGroup>
        
      </Toolbar>
    )
  }

}

KettleToolbar.propTypes = {
  title: PropTypes.string,
  leftbuttons: PropTypes.array,
  rightbuttons: PropTypes.array,
  onButton: PropTypes.func
}

KettleToolbar.defaultProps = {
  title: '',
  leftbuttons: [],
  rightbuttons: [],
  onButton: function(){}
}

export default KettleToolbar