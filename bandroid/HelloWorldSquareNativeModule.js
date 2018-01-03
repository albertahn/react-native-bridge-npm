//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { HelloWorldSquare } = NativeModules

export default {
  exampleMethod () {
    return HelloWorldSquare.exampleMethod()
  },

  EXAMPLE_CONSTANT: HelloWorldSquare.EXAMPLE_CONSTANT
}
