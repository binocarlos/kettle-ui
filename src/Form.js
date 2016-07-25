import React, { PropTypes, Component } from 'react'
import Biro from 'biro'
import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import library from 'biro-material-ui'
import layout from 'biro-material-ui/layout'

const blockStyle = {
  marginTop: '20px',
}

const errorChipStyle = {
  margin:'4px',
  marginTop:'10px'
}

const errorLabelStyle = {
  color:'white'
}

const refreshStyle = {
  display: 'inline-block',
  position: 'relative'
}

class Form extends Component {

  submit() {
    this.props.submit && this.props.submit(this.props.data, this.props.meta)
  }
  
  render() {

    const merged_library = Object.assign({}, library, this.props.library)

    const errorDiv = this.props.error && !this.props.loading ? (
      <Chip
        backgroundColor='red' 
        labelStyle={errorLabelStyle}
        style={errorChipStyle}
      >
        {this.props.error}
      </Chip>
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

      </div>
    )
  }

}

export default Form