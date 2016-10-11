import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import Input from './Input';
import Footer from './Footer';

export default class Header extends Component {
    render(){
        return (
            <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigator.pop()}><Text style={styles.headText}>返回</Text></TouchableOpacity>
                    <Text style={styles.headText}>{this.props.title}</Text>
                    <TouchableOpacity onPress={()=>alert('hello,world')}><Text style={styles.headText}>alert</Text></TouchableOpacity>
            </View>
        );
    }
}