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
    if (this.props.images.hits) {
      return (
        <View>
          {this.props.images.hits.map((value, index) => {
            return (
              <Card 
                key={value.id}
                user={value.user}
                webformatURL={value.webformatURL}
              />
            );
          })}
        </View>
      );

    } else {
      return (
        <Text>
          Loading...
        </Text>
      );
    }
  }
  
  render() {
    const {viewStyling} = styles;
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