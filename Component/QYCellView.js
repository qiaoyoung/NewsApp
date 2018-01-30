/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class QYCellView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.popView.bind(this)}>
          <Text style={styles.instructions}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  popView() {
    this.props.navigator.pop();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewsApp', () => NewsApp);
