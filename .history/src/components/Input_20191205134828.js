import React, { Component } from 'react';
import { StyleSheet,TextInput,View } from 'react-native';


export default class Input extends Component {
  render() {
    return (
      <View>
        <TextInput {...this.props}/> 
      
      </View>

    );
  }
};



const styles = StyleSheet.create({
    

});

