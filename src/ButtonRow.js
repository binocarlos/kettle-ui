import React, { Component, PropTypes } from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import ButtonDropdown from './ButtonDropdown'
import IconDropdown from './IconDropdown'

const STYLES = {
  button:{
    margin:'10px'
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

export const getButtonFromSchema = (schema, i) => {
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
    throw new Error('unknown button type: ' + type)
  }
}

class ButtonRow extends Component {

  render() {
    return (
      <div>
        {
          this.props.buttons.map((leftButton, i) => {
            return getButtonFromSchema(leftButton, i)
          })
        }
      </div>
    )
  }

}

ButtonRow.propTypes = {
  buttons: PropTypes.array
}

ButtonRow.defaultProps = {
  buttons: []
}

export default ButtonRow