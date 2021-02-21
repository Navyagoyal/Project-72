import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component{
  submitStory=()=>{
    
  }
  render(){
  return (
    <View style={styles.container}>
      <Header>Hi</Header>
      <TextInput style={styles.bar} placeholder="Title of the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
      <TextInput style={styles.bar} placeholder="Author of the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
      <TextInput style={styles.bar} placeholder="Write the story" on onChangeText={(text)=>{this.setState({search:text})}}/>
      <AppContainer/>
    </View>
  );
  }
}
const TabNavigator=createBottomTabNavigator({
  ReadStoryScreen:{screen:ReadStoryScreen},
  WriteStoryScreen:{screen:WriteStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName;
      if(routeName === "ReadStoryScreen")
      {
        return(
          <Image source={require("./assets/read.png")} style={{width:40,height:40}}/>
        );
      }
      else if(routeName === "WriteStoryScreen")
      {
        return(
          <Image source={require("./assets/write.png")} style={{width:40,height:40}}/>
        )
      }
    }
  })
}
)
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
