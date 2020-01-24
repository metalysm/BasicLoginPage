
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headBackground}/>

      </View>
    );
  }
};

     

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  headBackground:{
    position:'absolute',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    backgroundColor: '#1e90ff'
  }
});

