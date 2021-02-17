import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

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
      <Header></Header>
      <TextInput style={styles.bar} placeholder="Title of the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
      <TextInput style={styles.bar} placeholder="Author of the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
      <TextInput style={styles.bar} placeholder="Write the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
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
