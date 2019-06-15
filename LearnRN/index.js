// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header headerText={'Albumssss'} />
);

// Render it to a device
AppRegistry.registerComponent('LearnRN', () => App);
