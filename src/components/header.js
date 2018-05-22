import React from 'react';
import {Text, View} from 'react-native';

const styles = {
  styling: {
    fontSize: 30
  },
  viewStyling: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2 },
    shadowOpacity: 0.4,
    elevation: 1,
    position: 'relative'
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {styling, viewStyling} = styles;
    return (
      <View style={viewStyling}>      
        <Text style={styling}>
          {this.props.headTitle || 'Pixabay Images'}
        </Text>
      </View>
    );
  }
}

export default Header;