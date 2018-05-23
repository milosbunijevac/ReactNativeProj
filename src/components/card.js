import React from 'react';
import {View, Text, Image} from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#ccc',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  imageStyle: {
    padding: 3,
    position: 'relative',
    justifyContent: 'center'
  },
  imgSize: {
    height: 150,
    width: 150,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center'
  }
};

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {containerStyle, imageStyle, imgSize, textStyle} = styles;
    return (
      <View style={containerStyle}>
        <View>
          <Text style={textStyle}>
            {this.props.user || 'Card User'}
          </Text>
        </View>
        <View style={imageStyle}>
          <Image 
            source={{uri: this.props.webformatURL}}
            style={imgSize} 
          />
        </View>
      </View>
    );
  }
}

export default Card;