//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const HelloWorld = requireNativeComponent('HelloWorld', HelloWorldView)

export default class HelloWorldView extends Component {
  render () {
    return <HelloWorld {...this.props} />
  }
}

HelloWorldView.propTypes = {
  exampleProp: React.PropTypes.any
}
