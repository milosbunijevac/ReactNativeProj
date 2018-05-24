import React from 'react';
import Header from './src/components/header';
import ImageList from './src/components/imageList';
import SearchBar from './src/components/searchBar';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

import { StyleSheet, Text, View } from 'react-native';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header />
          <SearchBar />
          <ImageList /> 
        </View>
      </Provider>
    );
  }
}

export default App;