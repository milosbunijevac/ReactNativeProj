import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as images from '../actions/images';
import {View, Text, FlatList} from 'react-native';
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
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd() {
    console.log('The end was reached.');
    this.props.getImages.getMoreImages(this.props.text, this.props.images.page);
  }

  renderList() {
    if (this.props.images.data && this.props.images.data.length > 0) {
      return (
        <FlatList
          data={this.props.images.data}
          keyExtractor={(x, i) => i.toString()}
          onEndReached={this.handleEnd}
          onEndReachedThreshold={0}
          renderItem={ (card) => {
            return (
              <Card 
                key={card.item.id}
                allProps={card.item}
                user={card.item.user}
                webformatURL={card.item.webformatURL}
                navigation={this.props.navigation}
              />
            );
          }}
        />
      );

    } else if (this.props.images.data && this.props.images.data.length === 0) {
      return (
        <Text>
          If results are found, they will be displayed here.
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