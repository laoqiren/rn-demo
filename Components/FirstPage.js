import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import Input from './Input';
import Footer from './Footer';
import Header from './Header';

export default class FirstPage extends Component {
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }
    _navigate(name,type='Normal'){
        this.props.navigator.push({
            component:SecondPage,
            passProps: {
                name
            },
            type
        });
    }
    componentDidMount(){
        this.getPostsAsync()
    }
    handleListItemClick(rowID){
        this.setState({
            activeListItem:rowID
        })
    }
    async getPostsAsync(){
        try {
            let response = await fetch('http://www.reddit.com/r/reactjs.json',{
                method:'GET'
            });
            let json = await response.json();
            //console.log(json.data.children.map(child => child.data))
            const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
            this.setState({posts:ds.cloneWithRows(json.data.children.map(child => child.data))});
            //console.log(this.state.posts);
        } catch(err){
            console.log(err);
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Header title="首页" navigator={this.props.navigator}/>
                <View style={styles.content}>
                {
                    this.state.posts.length!=0?<ListView dataSource={this.state.posts} renderRow={
                        (post,sectionID,rowID)=>
                        <TouchableOpacity style={ownStyles.row} onPress={()=>this.handleListItemClick(rowID)} >
                            <Text>{post.title},rowID:{rowID}</Text>
                        </TouchableOpacity>
                    }/>:<Text style={{fontSize:20}}>加载中...</Text>
                }
                </View>
                <Footer navigator={this.props.navigator}/>
            </View>
        )
    }
}

const ownStyles = StyleSheet.create({
    row:{
        justifyContent:'center',
        padding:10,
        backgroundColor:'#F6F6F6',
        borderColor:'green',
        borderBottomWidth:1,
        borderStyle:'solid'
    }
})