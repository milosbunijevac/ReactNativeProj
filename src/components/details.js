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
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgSize: {
    flex: 1,
    width: 300,
    height: 200
  },
  textStyle: {
    textAlign: 'center',
    paddingTop: 10
  }
};

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {containerStyle, imageStyle, imgSize, textStyle} = styles;
    const {webformatURL, user, tags, imageWidth, imageHeight} = this.props.navigation.state.params.allProps;
    return (
      <ScrollView>
        <View style={imageStyle}>
          <Image style={imgSize} source={{uri: webformatURL || 'http://www.google.com'}}/>
        </View>
        <View style={containerStyle}>
          <Text style={textStyle}>
            <Text> Uploading user: {user || 'user'} {'\n'} </Text>
            <Text> Image Tags: {tags || 'tags'} {'\n'}</Text>
            <Text> Resolution: {imageWidth || 'width'} x {imageHeight || 'height'} {'\n'}</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Details;