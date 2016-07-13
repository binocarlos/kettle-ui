kettle-ui
=========

[material-ui](https://github.com/callemall/material-ui) widgets for applications
 
Widgets:

 * form (using [biro](https://github.com/binocarlos/biro))

## install

Install the module to your project:

```
$ npm install kettle-ui --save
```

## form component

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

## license

MIT