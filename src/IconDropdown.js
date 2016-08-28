import React, { PropTypes, Component } from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import DefaultIcon from 'material-ui/svg-icons/navigation/expand-more'

class IconDropdown extends Component {

  render() {

    var icon = this.props.icon || (<DefaultIcon />)
    var items = this.props.items || []

    return (
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            {icon}
          </IconButton>
        }>
        {
          items.map((item, i) => {
            return (
              <MenuItem key={i} primaryText={item.title} onTouchTap={() => {
                this.props.onselect(item)
              }}/>
            )
          })
        }
      </IconMenu>
    )
  }

}

export default IconDropdown