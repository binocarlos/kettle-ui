kettle-ui
=========

[material-ui](https://github.com/callemall/material-ui) widgets for applications - combined with [react-grid-system](https://github.com/zoover/react-grid-system) for a no CSS material toolkit:
 
Widgets:

 * Form - display form fields using [biro](https://github.com/binocarlos/biro)
 * Grid - export [react-grid-system](https://github.com/zoover/react-grid-system) directly
 * AppWrapper - an AppBar and an offset full width/height ContentPane
 * NavWrapper - scrollable sidebar and an offset full width/height ContentPane

## install

Install the module to your project:

```
$ npm install kettle-ui --save
```

## Form

A wrapper for a [biro](https://github.com/binocarlos/biro) form:

 * title
 * data - the form data
 * meta - the form meta
 * error - an overall error message (e.g. network failed message)
 * loading - is the form currently submitting or otherwise busy
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

```javascript
import React, {Component, PropTypes} from 'react'
import { Container, Row, Col } from 'kettle-ui/lib/Grid'

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

## AppWrapper

Use this to display an AppBar together with an offset content pane below.

All properties passed to the AppWrapper are passed onto the [AppBar Component](http://www.material-ui.com/#/components/app-bar).

The child elements are used as the content.

 * appbar - the React element to use as the topbar
 * height - the height of the topbar (default=64px)

```javascript
import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import AppWrapper from 'kettle-ui/lib/AppWrapper'

class App extends Component {
 
  render() {

    return (
      <AppWrapper
        appbar={
          <AppBar title="MyApp" />
        }>
        This is the body content
      </AppWrapper>
    );
  }
}
```

NOTE - to use this you need CSS like the following:

```css
body, html {

  height: 100%;

  border: 0;
  margin: 0;
  padding: 0;

}
```

## NavWrapper

Use this to display an auto-scrollable side-panel for navigation (for example a menu or list).

It will display child elements in the content pane on the right hand side.

 * navbar - the React element to use as the navbar
 * width - the width of the navbar (default=200px)
 * height - the height of the topbar (default=64px)
 * paperprops - use material-ui paper for the left nav
   * zDepth
   * rounded
 * styles - override properties of the div styles
   * wrapper - the container div
   * tree - the div containing the left nav
   * content - the div containing the right content
   * inner - the content div inside both tree and content

```javascript
import React, {Component, PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import NavWrapper from 'kettle-ui/lib/NavWrapper'

class MainContent extends Component {
 
  render() {

    var overrideStyles = {
      tree:{
        borderRight:'1px solid #999'
      }
    }

    return (
      <NavWrapper
        styles={overrideStyles}
        navbar={
          <List>
            <Subheader>Navigation</Subheader>
            <ListItem primaryText="Sent mail" />
            <ListItem primaryText="Drafts" />
            <ListItem
              primaryText="Inbox"
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred" />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                />
              ]}
            />
          </List>
        }>
        This is the body content
      </AppWrapper>
    );
  }
}
```

## ToolbarWrapper

Use this to display an auto-scrollable content-panel below a fixed position toolbar.

 * toolbar - the React element to use as the toolbar
 * height - the height of the topbar (default=56px)
 * styles - override properties of the div styles
   * container - the container div
   * toolbar - the div containing the top toolbar
   * content - the div containing the bottom content
   * inner - the content div inside both tree and content

```javascript
import React, {Component, PropTypes} from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import ToolbarWrapper from 'kettle-ui/lib/ToolbarWrapper'

class MainContent extends Component {
 
  render() {

    return (
      <ToolbarWrapper        
        toolbar={
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle text="Options" />
            </ToolbarGroup>
          </Toolbar>
        }>
        This is the body content
      </ToolbarWrapper>
    );
  }
}
```

## AppNavWrapper

A combo of the app and nav wrapper so you pass the appbar and navbar both as properties

 * appbar - the React element to use as the topbar
 * navbar - the React element to use as the navbar
 * width - the width of the navbar (default=200px)
 * height - the height of the topbar (default=64px)
 * styles - override styles of the navbar
 * paperprops - the paper props for the navbar
 
```javascript
import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import AppNavWrapper from 'kettle-ui/lib/AppNavWrapper'

class MainContent extends Component {
 
  render() {

    return (
      <AppNavWrapper
        appbar={
          <AppBar title="MyApp" />
        }
        navbar={
          <List>
            <Subheader>Navigation</Subheader>
            <ListItem primaryText="Sent mail" />
            <ListItem primaryText="Drafts" />
            <ListItem
              primaryText="Inbox"
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred" />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                />
              ]}
            />
          </List>
        }>
        This is the body content
      </AppNavWrapper>
    );
  }
}
```

## ButtonDropDown

A button with a popover.

 * buttonclass - the React class to use as the button
 * buttonprops - the props to pass to the button (onTouchTap will be added)
 * children - what to render in the popover

```javascript
import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import ButtonDropDown from 'kettle-ui/lib/ButtonDropDown'

class MyPopover extends Component {
 
  render() {

    return (
      <ButtonDropDown
        buttonclass={RaisedButton}
        buttonprops={{
          label="Click me"
        }}>
        <Menu>
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Sign out" />
        </Menu>
      </ButtonDropDown>
    );
  }
}
```

## tools

#### `mergeStyles(basestyles = {}, overrides = {})`

Use this function to merge two sets of styles - useful for applying overrides to default style groups:

```javascript
import { mergeStyles } from 'kettle-ui/lib/tools'
const basestyles = {
  container:{
    width:'10px'
  },
  footer:{
    width:'12px'
  }
}

const overrides = {
  container:{
    height:'20px'
  },
  footer:{
    width:'50px'
  }
}

console.log(mergeStyles(basestyles, overrides))

/*

{
  container:{
    width:'10px',
    height:'20px'
  },
  footer:{
    width:'50px'
  }
}{text}
  
*/

## license

MIT