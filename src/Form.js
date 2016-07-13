import React, { PropTypes, Component } from 'react'
import Biro from 'biro'
import RaisedButton from 'material-ui/RaisedButton'
import library from 'biro-material-ui'
import layout from 'biro-material-ui/layout'

const buttonstyle = {
  marginTop: 12,
}

class Form extends Component {

  submit() {
    this.props.submit && this.props.submit(this.props.data, this.props.meta)
  }
  
  render() {

    var merged_library = Object.assign({}, library, this.props.library)
    
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

        <RaisedButton 
          label={this.props.title || 'Submit'} 
          primary={true} 
          onClick={this.submit.bind(this)}
          style={buttonstyle} 
        />

      </div>
    )
  }

}

export default Form