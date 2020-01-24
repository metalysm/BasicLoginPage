import React, { Component } from 'react';
import { StyleSheet,TextInput,View} from 'react-native';


export default class Input extends Component {
    state={
        text:''
    };
  render() {   
    return (
        <View>
            <TextInput 
            {...this.props}
            placeholderTextColor = "#ddd"
            style={styles.input}
            value={this.state.text}
            ref={this.props.inputRef  }
            onChangeText={text => this.setState({text})}
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

