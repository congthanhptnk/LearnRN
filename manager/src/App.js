import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Text>HI</Text>
        </View>
      </Provider>
    );
  }
}
