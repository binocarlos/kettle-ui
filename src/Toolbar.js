import React, { Component, PropTypes } from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import ButtonDropdown from './ButtonDropdown'
import IconDropdown from './IconDropdown'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

const STYLES = {
  button:{  
    margin:'10px'
  },
  leftSeperator:{
    width:'25px',
    display:'inline-block'
  }
}

export const getMenuItems = (items = []) => {
  return items.map((item,i) => {
    return (
      item.divider ? (
        <Divider key={i} />
      ) : (
        <MenuItem key={i} primaryText={item.title} onTouchTap={() => {
          item.handler && item.handler()
        }}/>
      )
    )
  })
}

export const getButtonDropdown = (label, items = [], extraProps = {}, i) => {
  return (
    <ButtonDropdown
      key={i}
      timestamp={new Date().getTime()}
      buttonclass={RaisedButton}
      buttonprops={{
        label:label,
        style:STYLES.button,
        ...extraProps
      }}>
      <Menu>
      {getMenuItems(items)}
      </Menu>
    </ButtonDropdown>
  )
}

export const getIconDropdown = (icon, items = [], i) => {
  return (
    <IconDropdown
      key={i}
      icon={icon}
      items={items} />
  )
}

export const getButton = (label, handler, extraProps = {}, i) => {
  return (
    <RaisedButton 
      key={i}
      label={label}
      style={STYLES.button} 
      onTouchTap={handler}
      {...extraProps} />
  )
}

class KettleToolbar extends Component {

  getButtonFromSchema(schema, i) {
    let type = schema.type || 'button'
    if (type=='dropdown') {
      return getButtonDropdown(schema.title, schema.items, schema.extraProps, i)
    }
    else if (type=='button') {
      return getButton(schema.title, schema.handler, schema.extraProps, i)
    }
    else if (type=='icon') {
      return getIconDropdown(schema.icon, schema.items, schema.extraProps, i)
    }
    else {
      console.error('unknown button type: ' + type)
      console.log(JSON.stringify(schema, null, 4))
      return (
        <div key={i}></div>
      )
    }
  }


  render() {

    return (
      <Toolbar>
        <ToolbarGroup key={0}>
          {
            this.props.title ? (
              <ToolbarTitle text={this.props.title} />
            ) : null
          }
          {
            this.props.title ? (
              <ToolbarSeparator />
            ) : null
          }

          <div style={STYLES.leftSeperator}></div>

          {
            this.props.leftbuttons.map((leftButton, i) => {
              return this.getButtonFromSchema(leftButton, i)
            })
          }
          

          {this.props.children}
        
        </ToolbarGroup>

        <ToolbarGroup key={1}>
          {
            this.props.rightChildren
          }
          {
            this.props.rightbuttons.map((rightButton, i) => {
              return this.getButtonFromSchema(rightButton, i)
            })
          }
       
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