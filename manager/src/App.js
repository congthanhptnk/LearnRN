import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <Header headerText='Login Form' />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
