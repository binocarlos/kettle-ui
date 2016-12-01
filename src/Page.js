import React, { Component, PropTypes } from 'react'

const STYLE = {
  marginLeft:'10%',
  marginRight:'10%',
  marginTop:'5%'
}

class Page extends Component {
  render() {
    const useStyle = Object.assign({}, STYLE, this.props.style)
    return (
      <div style={useStyle}>
        {this.props.children}
      </div>
    )
  }

}

export default Page