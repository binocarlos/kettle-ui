import React, { PropTypes, Component } from 'react'

function getStyles(conf = {}){
  return {
    header:{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '64px',
      zIndex: '1'
    },
    main:{
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingTop: '64px',
      boxSizing: 'border-box'
    }
  }
}
class AppWrapper extends Component {

  render() {

    var styles = getStyles()

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