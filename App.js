import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import db from './config';
import firebase from 'firebase';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>  
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
    padding:10,
    marginLeft:20
  },
});
