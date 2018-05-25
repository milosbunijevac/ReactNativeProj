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
    return (
      <ScrollView>
        <View style={imageStyle}>
          <Image style={imgSize} source={{uri: this.props.navigation.state.params.allProps.webformatURL || 'http://www.google.com'}}/>
        </View>
        <View style={containerStyle}>
          <Text style={textStyle}>
            <Text> Uploading user: {this.props.navigation.state.params.allProps.user || 'user'} {'\n'} </Text>
            <Text> Image Tags: {this.props.navigation.state.params.allProps.tags || 'tags'} {'\n'}</Text>
            <Text> Resolution: {this.props.navigation.state.params.allProps.imageWidth || 'width'} x {this.props.navigation.state.params.allProps.imageHeight || 'height'} {'\n'}</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Details;