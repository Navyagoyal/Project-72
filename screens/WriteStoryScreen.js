import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      search:''
    }
  }
  submitStory=()=>{
    db.collection("Title").add({
      'title':this.state.text
    })
    db.collection("Author").add({
      'author':this.state.text
    })
    db.collection("Story").add({
      'story':this.state.text
    })
    this.setState({
      text:'',
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Title of the story" onChangeText={(text)=>{this.setState({search:text})}}/>
        <TextInput style={styles.author} placeholder="Author of the story" onChangeText={(text)=>{this.setState({search:text})}}/>
        <TextInput style={styles.story} placeholder="Write the story" onChangeText={(text)=>{this.setState({search:text})}}/>
        <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>SUBMIT</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    width:150,
    height:50,
    borderWidth:2,
    margin:10,
  },
  author:{
    width:150,
    height:50,
    borderWidth:2,
    margin:10
  },
  story:{
    width:150,
    height:200,
    borderWidth:2,
    margin:10
  },
  submitButton:{
    width:100,
    height:50,
    borderWidth:2,
    margin:10,
    backgroundColor:"pink",
    alignItems:'center',
    justifyContent:'center'
  },
});
