import React, { PropTypes, Component } from 'react'

const STYLE_DEFAULTS = {
  height:64,
  width:200
}

function getStyles(conf = {}){
  var width = (conf.width || STYLE_DEFAULTS.width) + 'px'
  var height = (conf.height || STYLE_DEFAULTS.height) + 'px'

  return {
    wrapper:{
      width: '100%',
      height: '100%'
    },
    tree:{
      minHeight: '100%',
      boxSizing: 'border-box',
      overflowY: 'auto',
      position: 'fixed',
      top: '0',
      left: '0',
      width: width,
      paddingTop: height,
      maxHeight: '100%',
      zIndex:'100'
    },
    content:{
      minHeight: '100%',
      boxSizing: 'border-box',
      position: 'absolute',
      top: '0',
      right: '0',
      width: '100%',
      paddingLeft: width,
      paddingTop: height
    },
    inner:{
      position: 'relative'
    }
  }
}
class NavWrapper extends Component {

  render() {

    var styles = getStyles(this.props)

    return (
      <div style={styles.wrapper}>
        <section style={styles.tree}>
          <div style={styles.inner}>
            {this.props.navbar}
          </div>
        </section>
        <section style={styles.content}>
          <div style={styles.inner}>
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }

}

export default NavWrapper