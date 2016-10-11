/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import FirstPage from './Components/FirstPage';
import styles from './styles';

class android extends Component {
  configureScene(route,routeStack){
      if(route.type === 'bottom')
        return Navigator.SceneConfigs.FloatFromBottomAndroid;
      return Navigator.SceneConfigs.FadeAndroid;
  }
  renderScene(route,navigator){
    return <route.component navigator={navigator} {...route.passProps}/>
  }
  render(){
    return (
        <Navigator initialRoute={{component:FirstPage}} renderScene={this.renderScene} configureScene={this.configureScene}/>
    );
  }
}

AppRegistry.registerComponent('myAndroid', () => android);
