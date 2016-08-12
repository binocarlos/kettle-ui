import React, { PropTypes, Component } from 'react'
import AppWrapper from './AppWrapper'
import NavWrapper from './NavWrapper'

class AppNavWrapper extends Component {

  render() {

    return (
      <AppWrapper 
        appbar={this.props.appbar} 
        height={this.props.height}>
        <NavWrapper
          navbar={this.props.navbar} 
          width={this.props.width}
          height={this.props.height}>
          {this.props.children}
        </NavWrapper>
      </AppWrapper>
    )

  }

}

export default AppNavWrapper