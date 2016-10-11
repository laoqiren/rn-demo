import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles';
import Input from './Input';

export default class Blink extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header navigator={this.props.navigator} title="技术博客"/>
                <View style={styles.content}>
                    <WebView
                        source={{uri: 'http://luoxia.me'}}
                    />
                </View>
                
                <Footer navigator={this.props.navigator}/>
            </View>
        )
    }
}