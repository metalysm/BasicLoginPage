import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.signInText}>Sign In</Text>
                <Input
                    placeholder="Username"
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    inputRef={input => this.passwordInput = input}
                />
                <MyButton
                    textColor={"#f1f1f1"}
                    text={"Sign In Now"}
                    bgColor={"#0065e0"}
                />
            </View>
        );
    }
}; 



const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333'
    }

});

