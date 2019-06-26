import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Router from './Router';

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
        <Router />
      </Provider>
    );
  }
}

export default App;
