/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import QYMain from './Component/QYMain'

export default class NewsApp extends Component {
  render() {
    return (
      <QYMain/>
    );
  }
}

AppRegistry.registerComponent('NewsApp', () => NewsApp);
