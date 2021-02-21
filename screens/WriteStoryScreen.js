import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
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
    render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
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
});
