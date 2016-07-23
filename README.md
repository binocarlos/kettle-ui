kettle-ui
=========

[material-ui](https://github.com/callemall/material-ui) widgets for applications - combined with [react-grid-system](https://github.com/zoover/react-grid-system) for a no CSS material toolkit:
 
Widgets:

 * Form - display form fields using [biro](https://github.com/binocarlos/biro)
 * Grid - export [react-grid-system](https://github.com/zoover/react-grid-system) directly

## install

Install the module to your project:

```
$ npm install kettle-ui --save
```

## Form component

A wrapper for a [biro](https://github.com/binocarlos/biro) form:

 * title
 * data - the form data
 * meta - the form meta
 * schema - the fields
 * validate - overall validator
 * library - extra library fields merged into [biro-material-ui](https://github.com/binocarlos/biro-material-ui)
 * update - the function to update the (data,meta)
 * submit - when the submit button is cancelled

```javascript
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { formupdate, formsubmit } from '../actions'
import KettleForm from 'kettle-ui/lib/Form'

// the biro schema
const SCHEMA = ['username','password']

export class LoginForm extends Component {

  render() {

    // the extra props we pass onto of data,meta,update,submit
    const formProps = {
      title:'Login',
      schema:SCHEMA,
      ...this.props
    }

    return (
      <KettleForm {...this.props} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    data:state.loginform.data,
    meta:state.loginform.meta
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update:function(data, meta){
      dispatch(formupdate(data, meta))
    },
    submit:function(data, meta){
      dispatch(formsubmit(data, meta))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
```

## Grid

You can import the `Container`, `Row` and `Col` classes from [react-grid-system](https://github.com/zoover/react-grid-system):

The docs for the grid system [live here](https://zoover.github.io/react-grid-system/)

```
import React, {Component, PropTypes} from 'react'
import { Container, Row, Col } from 'kettle-ui/lib/grid'

class Page extends Component {
 
  render() {

    const styles = {
      container:{
        marginTop:'20px'
      }
    }
  
    var width = parseInt(this.props.width)
    width = isNaN(width) ? 6 : width
    const otherWidth = (12-width)/2;

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={this.props.title}
          zDepth={0}
        />

        <Container style={styles.container}>
          <Row>
            <Col md={otherWidth}></Col>
            <Col md={width}>
              {this.props.children}
            </Col>
            <Col md={otherWidth}></Col>
          </Row>

        </Container>
      </div>
    );
  }
}
```

## license

MIT