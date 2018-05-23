import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as images from '../actions/images';
import {View, Text} from 'react-native';

const styles = {
  viewStyling: {
    alignItems: 'center',
    paddingTop: 10
  }
};

class imageList extends React.Component {

  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    this.props.getImages.getImages();
  }

  renderList() {
    <Text>
      Blah
    </Text>;
  }
  
  render() {
    const {viewStyling} = styles;
    console.log('Image totalHits: ', this.props.images.totalHits);
    return (
      <View style={viewStyling}>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.Images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: bindActionCreators(images, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(imageList);