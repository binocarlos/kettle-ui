import React, { PropTypes, Component } from 'react'

const STYLE_DEFAULTS = {
  height:56,
  offsetWidth:0
}

function getStyles(conf = {}){
  var height = (conf.height || STYLE_DEFAULTS.height) + 'px'
  var offsetWidth = (conf.offsetWidth || STYLE_DEFAULTS.offsetWidth) + 'px'

  return {
    header:{
      position: 'fixed',
      width: '100%',
      height: height,
      zIndex: '998',
      boxSizing: 'border-box',
      paddingRight: offsetWidth,
    },
    headerContent:{
      
    },
    main:{
      position: 'relative',
      width: '100%',
      height: '100%',
      paddingTop: height,
      boxSizing: 'border-box'
    }
  }
}
class ToolbarWrapper extends Component {

  render() {

    var styles = getStyles(this.props)

    return (
      <div>
        <header style={styles.header}>          
          {this.props.toolbar}
        </header>
        <main style={styles.main}>
          {this.props.children}
        </main>
      </div>
    )
  }

}

export default ToolbarWrapper