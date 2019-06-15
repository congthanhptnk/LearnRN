// Import
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> { props.headerText } </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  }
};
// Export
export default Header;
