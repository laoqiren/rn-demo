import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import FirstPage from './FirstPage';
import About from './About';
import Blink from './Blink'

export default class Footer extends Component {
    render(){
        return (
            <View style={styles.footer}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigator.push({
                            component:FirstPage
                        })} style={styles.button}><Text style={styles.buttonText}>头条</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigator.push({
                            component:Blink,
                            passProps:{
                                text:'hello'
                            }
                        })} style={styles.button}><Text style={styles.buttonText}>技术博客</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigator.push({
                            component:About
                        })} style={styles.button}><Text style={styles.buttonText}>关于</Text></TouchableOpacity>
                    </View>
                    
                </View>
        );
    }
}