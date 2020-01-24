
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />
        <View>
          <Text style={styles.logo}>UDAC</Text>
          <Text style={styles.logoDescription}>Property & Tax Survey</Text>
        </View>
        <ScrollView>
          <View style={styles.loginArea}>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
          </View>
        </ScrollView>

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
  logoDescription:{
    textAlign: 'center',
    color:'#f2f2f2',
  },
  loginArea :{
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor:'#fff',
    padding:20,
    borderRadius: 5,

    shadowColor:'black',
    shadowOpacity: .3, //0 ile 1 arasında bir rakam girilir.
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 10
    }
  }
});

