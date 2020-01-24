import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }//autoCapitalize baş harfi büyük yapmayı kapadık.
}; //securetextentry şifreyi gizli yapmamızı sağladı.



const styles = StyleSheet.create({

});

