import React from 'react';
import Header from './src/components/header';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
