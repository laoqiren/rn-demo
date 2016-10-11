import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import Header from './Header';
import Footer from './Footer';

export default class About extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header navigator={this.props.navigator} title="关于"/>
                <View style={aboutStyle.content}>
                    <Text>
                        软件作者：laoqiren
                        软件版本: 0.0.1
                    </Text>
                </View>
                <Footer navigator={this.props.navigator}/>
            </View>
        )
    }
}
const aboutStyle = {
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}