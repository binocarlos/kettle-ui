import React, { PropTypes, Component } from 'react'

const STYLE_DEFAULTS = {
  height:64
}

function getStyles(conf = {}){
  var height = (conf.height || STYLE_DEFAULTS.height) + 'px'
  return {
    header:{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: height,
      zIndex: '1000'
    },
    main:{
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingTop: height,
      boxSizing: 'border-box'
    }
  }
}
class AppWrapper extends Component {

  render() {

    var styles = getStyles(this.props)

    return (
      <div>
        <header style={styles.header}>
          {this.props.appbar}
        </header>
        <main style={styles.main}>
          {this.props.children}
        </main>
      </div>
    )
  }

}

export default AppWrapper