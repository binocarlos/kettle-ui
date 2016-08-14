import React, { PropTypes, Component } from 'react'
import Paper from 'material-ui/Paper'
import { mergeStyles } from './tools'

const STYLE_DEFAULTS = {
  height:64,
  width:200
}

function getStyles(conf = {}){
  var styles = conf.styles || {}
  var width = (conf.width || STYLE_DEFAULTS.width) + 'px'
  var height = (conf.height || STYLE_DEFAULTS.height) + 'px'

  var baseStyles = {
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
      zIndex:'999'
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

  return mergeStyles(baseStyles, styles)
}
class NavWrapper extends Component {

  render() {

    var styles = getStyles(this.props)

    return (
      <div style={styles.wrapper}>
        {
          this.props.paperprops ? (
            <Paper {...this.props.paperprops} style={styles.tree}>
              <div style={styles.inner}>
                {this.props.navbar}
              </div>
            </Paper>
          ) : (
            <div style={styles.tree}>
              <div style={styles.inner}>
                {this.props.navbar}
              </div>
            </div>
          )
        }
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