import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Form from '../../lib/Form'

const SCHEMA = ['name', 'color']
function setup(value){
  var props = {
    update:expect.createSpy(),
    submit:expect.createSpy(),
    schema:SCHEMA,
    data:{},
    meta:null
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Form {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Form', () => {

  it('should render', () => {
    
    const { output } = setup()

    expect(output.type).toBe('div')
    expect(output.props.children.length).toBe(2)
    
  })




})
