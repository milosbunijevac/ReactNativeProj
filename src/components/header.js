import React from 'react';
import {Text, View} from 'react-native';

const styles = {
  styling: {
    fontSize: 30
  },
  viewStyling: {
    backgroundColor: 'skyblue',
    alignItems: 'center'
  }
};

class Header extends React.Component {
  
  render() {
    const {styling, viewStyling} = styles;
    return (
      <View style={viewStyling}>      
        <Text style={styling}>
          Pixabay
        </Text>
      </View>
    );
  }
}

export default Header;