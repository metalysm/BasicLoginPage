
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView
} from 'react-native';
import LoginForm from '../pages/LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headBackground} />
                
                <KeyboardAvoidingView behavior={"position"}>
                <View>
                    <Text style={styles.logo}>UDAC</Text>
                    <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                </View>
                <View style={styles.loginArea}>
                    <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                    <Text style={styles.loginAreaDesc}>
                        Unique Door No Easily Fill Your Entire Property Tax Using App
                    </Text>
                <LoginForm/>
                </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#1e90ff'
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2',
    },
    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        // SHADOW TANIMLARI SADECE IOS TA VARDIR.
        /* GÖLGELENDİRME
        shadowColor:'black',
        shadowOpacity: .2, //0 ile 1 arasında bir rakam girilir.
        shadowRadius: 3,
        shadowOffset: {
          width: 0,
          height: 2
        }*/
        elevation: 4
    },
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginAreaDesc: {
        fontSize: 12,
        color: '#7e868f',
        marginVertical: 10,
        textAlign: 'center'
    }
});