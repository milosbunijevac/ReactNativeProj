import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

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

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {containerStyle, imageStyle, imgSize, textStyle} = styles;
    return (
      <ScrollView>
        <View style={imageStyle}>
          <Image style={imgSize} source={{uri: this.props.webformatURL}}/>
        </View>
        <View style={containerStyle}>
          <Text style={textStyle}>
            <Text> Uploading user: {this.props.user} </Text>
            <Text> Image Tags: {this.props.tags} </Text>
            <Text> Resolution: {this.props.imageWidth} x {this.props.imageHeight}</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Details;