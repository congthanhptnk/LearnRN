import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './component/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDMGIH7d399cy8vdVcZ-Rq7L1jB0tSny0c',
      authDomain: 'auth-33702.firebaseapp.com',
      databaseURL: 'https://auth-33702.firebaseio.com',
      projectId: 'auth-33702',
      storageBucket: 'auth-33702.appspot.com',
      messagingSenderId: '871451442262',
      appId: '1:871451442262:web:499fc2f4713c80a4'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Whatever</Text>
      </View>
    );
  }
}

export default App;
