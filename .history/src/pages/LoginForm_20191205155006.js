import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/Input';

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.signInText}>Sign In</Text>
                <Input 
                    placeholder="Username" 
                    autoCapitalize="none"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                />
                <Input 
                    placeholder="Password" 
                    secureTextEntry={true}
                    inputRef={input => this.passwordInput = input} 
                />
            </View>
        );
    }//autoCapitalize baş harfi büyük yapmayı kapadık.
}; //securetextentry şifreyi gizli yapmamızı sağladı.



const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333'
    }

});

