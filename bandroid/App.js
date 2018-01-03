/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import HelloWorldSquare from './HelloWorldSquareNativeView'
import HelloWorld from './HelloWorldNativeModule';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  state = {
    nativeModuleText : null

  }

  componentWillMount(){

    HelloWorld.emitter.addListener('EXAMPLE_EVENT', ({greeting})=>
    this.setState(()=>({nativeModuleText:greeting})),
  
    );
  }//will mount

  componentWillUnmount(){
     HelloWorld.emitter.remove();

  }//unmout

  onPress = () => {

    HelloWorld.exampleMethod();
  };//press


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        

        <TouchableOpacity style = {{width:100, height:100, backgroundColor:'#ffffff'}} onPress = {this.onPress} >

          <Text style = {{ color: '#333333'}}> Click me</Text>
          <Text style={{ color: '#333333'}}>
          Hi: {this.state.nativeModuleText}
          </Text>
        </TouchableOpacity>

       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width:100,
    height:100,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
