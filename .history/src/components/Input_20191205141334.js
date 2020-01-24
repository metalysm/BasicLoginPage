import React, { Component } from 'react';
import { StyleSheet,TextInput,View,Keyboard} from 'react-native';


export default class Input extends Component {
  render() { 
    Keyboard.dismiss()
    return (
        <View>
            <TextInput 
            {...this.props}
            placeholderTextColor = "#ddd"
            style={styles.input}
            />
        </View>
    ); //{...this.props} => loginformdaki <Input> içerisindeki
  }    // bütün her şeyi al buraya yerleştir demek.
};


const styles = StyleSheet.create({
    input: {
        height:40,
        paddingHorizontal:5,
        borderRadius:4,
        borderWidth:2,
        borderColor:'#f1f1f1',
        fontSize:14,
        color:'#999',
        marginBottom:8,
        fontWeight:'600'
    }

});

