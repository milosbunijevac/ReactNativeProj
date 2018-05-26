import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as images from '../actions/images';
import {View, Text, ScrollView} from 'react-native';
import Pagination, {Icon, Dot} from 'react-native-pagination';

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

  renderList() {
    if (this.props.images.hits && this.props.images.hits.length > 0) {
      return (
        <ScrollView>
          {this.props.images.hits.map((value, index) => {
            return (
              <Card 
                key={value.id}
                value={value}
                user={value.user}
                webformatURL={value.webformatURL}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      );

    } else if (this.props.images.hits && this.props.images.total === 0) {
      return (
        <Text>
          No results found.
        </Text>
      );
    } else {
      return (
        <Text>
          
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
    images: state.Images,
    text: state.TextInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: bindActionCreators(images, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(imageList);