import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Form from '../src/Form'
import AppNavWrapper from '../src/AppNavWrapper'
import ButtonDropdown from '../src/ButtonDropdown'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from '../src/Grid'


const SCHEMA = [
  'firstname',
  'surname'
]

const FORM_UPDATE = 'FORM_UPDATE'

function formUpdateAction(data, meta){
  return {
    type:FORM_UPDATE,
    data:data,
    meta:meta
  }
}

const initialState = {
  data:{},
  meta:null
}

const reducer = combineReducers({
  form: function(state = initialState, action = {}) {
    switch (action.type) {
      case FORM_UPDATE:
        return Object.assign({}, state, {
          data:action.data,
          meta:action.meta
        })
      default:
        return state
    }
  }
})

const finalCreateStore = compose(
  applyMiddleware.apply(null, []),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)

const store = finalCreateStore(reducer)

class MyForm extends Component {
  render() {
    return (
      <Form
        title='Apples' 
        data={this.props.data}
        meta={this.props.meta}
        schema={SCHEMA}
        update={this.props.update} 
        submit={this.props.submit}  />
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    data:state.form.data,
    meta:state.form.meta
  }
}


function mapDispatchToProps(dispatch, ownProps) {
  return {
    update:function(data, meta){
      dispatch(formUpdateAction(data, meta))
    },
    submit:function(data, meta){
      console.log('submit form')
    },
  }
}

var FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm)

injectTapEventPlugin()

ReactDOM.render(  
  <Provider store={store}>
    <MuiThemeProvider>
      <AppNavWrapper
        appbar={<AppBar
          showMenuIconButton={false}
          title="Test App"
          zDepth={2} />
        }
        navbar={
          <div>this is the tree</div>
        }>
        <Container>
          <Row>
            <Col md={3}>
              <ButtonDropdown
                buttonclass={RaisedButton}
                buttonprops={{
                  label:"click me"
                }}>
                this is a test
              </ButtonDropdown>
            </Col>
            <Col md={6}>
              <FormContainer />
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </AppNavWrapper>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('mount')
)
