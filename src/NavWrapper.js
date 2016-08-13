import React, { PropTypes, Component } from 'react'
import Paper from 'material-ui/Paper'

const STYLE_DEFAULTS = {
  height:64,
  width:200
}

function getStyles(conf = {}){
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
  var ret = {}
  Object.keys(baseStyles || {}).forEach(function(key){
    var style = baseStyles[key]
    style = Object.assign({}, style, conf[key])
    ret[key] = style
  })
  return ret
}
class NavWrapper extends Component {

  render() {

    var styles = getStyles(this.props.styles)

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