import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.button, {backgroundColor: this.props.bgColor}]}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }//autoCapitalize baş harfi büyük yapmayı kapadık.
}; //securetextentry şifreyi gizli yapmamızı sağladı.

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

const styles = StyleSheet.create({
    button: {

    }
});

