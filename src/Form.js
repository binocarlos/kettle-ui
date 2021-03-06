import React, { PropTypes, Component } from 'react'
import Biro from 'biro'
import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip'
import {pinkA700} from 'material-ui/styles/colors'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import library from 'biro-material-ui'
import layout from 'biro-material-ui/lib/layout'

const blockStyle = {
  marginTop: '20px',
}

const errorChipStyle = {
  margin:'4px',
  marginTop:'10px'
}

const errorLabelStyle = {
  float:'right',
  color:'white'
}

const refreshStyle = {
  display: 'inline-block',
  position: 'relative'
}

class Form extends Component {

  static contextTypes = {muiTheme: PropTypes.object.isRequired}

  submit() {
    this.props.submit && this.props.submit(this.props.data, this.props.meta)
  }
  
  render() {

    const palette = this.context.muiTheme.palette

    const merged_library = Object.assign({}, library, this.props.library)

    const errorDiv = this.props.error && !this.props.loading ? (
      <div
        style={{
          float:'right'
        }}
      >
        <div style={{
          paddingTop:'15px'
        }}>
          <span style={{
            backgroundColor:palette.accent1Color,
            color:palette.alternateTextColor,
            padding:'5px'
          }}>
              {this.props.error}
          </span>
        </div>
      </div>
    ) : null

    const submitButton = this.props.loading ? (
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={refreshStyle}
      />
    ) : (
      <RaisedButton 
        label={this.props.title || 'Submit'} 
        primary={true} 
        disabled={this.props.disableButton}
        onClick={this.submit.bind(this)}
      />
    )

    return (
      <div>

        <Biro 
          data={this.props.data}
          meta={this.props.meta}
          library={merged_library} 
          layout={layout}
          schema={this.props.schema} 
          validate={this.props.validate} 
          update={this.props.update}
        />

        <div style={blockStyle}>
          {submitButton}
        </div>

        <div style={blockStyle}>
          {errorDiv}
        </div>

        {this.props.children}

      </div>
    )
  }

}

export default Form