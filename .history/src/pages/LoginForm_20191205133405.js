import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signInText}>Sign In</Text>
      </View>
    );
  }
};



const styles = StyleSheet.create({
    signInText:{
        marginVertical:10,
        fontSize:14,
        color:'#333'
    }

});

