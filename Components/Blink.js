import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles';
import Input from './Input';

export default class Blink extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header navigator={this.props.navigator} title="Blink"/>
                <View style={styles.content}>
                    <Text style={{color:'red'}}>{this.props.text}</Text>
                    <Text style={{color:'blue'}}>
                    Welcome to
                    <Text style={{color:'red'}}>
                    React Native!
                    </Text>
                    </Text>
                    <Input/>
                </View>
                
                <Footer navigator={this.props.navigator}/>
            </View>
        )
    }
}