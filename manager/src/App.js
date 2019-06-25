import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAFpi_Fh1Ln-z5_eOvvIYcxBeGKTm8JkOY',
      authDomain: 'manager-aa6ff.firebaseapp.com',
      databaseURL: 'https://manager-aa6ff.firebaseio.com',
      projectId: 'manager-aa6ff',
      storageBucket: '',
      messagingSenderId: '205999694896',
      appId: '1:205999694896:web:3d02ea1de462ed00'
  };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
