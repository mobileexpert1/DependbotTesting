/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import store from './src/redux/store';
import Routes from './src/navigation/Routes';
LogBox.ignoreAllLogs();
const root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
AppRegistry.registerComponent(appName, () => root);
