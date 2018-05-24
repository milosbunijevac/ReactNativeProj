import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput, Text, View, Button} from 'react-native';
import * as textInput from '../actions/textInput';
import * as images from '../actions/images';

const styles = {
  inputBar: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 30,
    width: 400
  }
};

class searchBar extends React.Component {
  constructor(props) {
    super(props);

    this.submitSearch = this.submitSearch.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  submitSearch() {
    this.props.getImages.getImages(this.props.textInput);
  }

  inputChange(text) {
    this.props.getText.getText(text);
  }

  render() {
    const {inputBar} = styles;
    return (
      <View>
        <TextInput 
          onChangeText={this.inputChange}
          value={this.props.textInput} 
          placeholder={'What would you like to see?'} 
          style={inputBar}
        />
        <Button
          style={{fontSize: 20, color: 'skyblue'}}
          onPress={() => this.submitSearch()}
          title="Search"
        >
          Search
        </Button>
      </View>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    textInput: state.TextInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getText: bindActionCreators(textInput, dispatch),
    getImages: bindActionCreators(images, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);