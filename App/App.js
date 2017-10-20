import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import { HomeScreen, StatsScreen, SettingsScreen } from './screens';

const AppWithNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Stats: { screen: StatsScreen },
  Settings: { screen: SettingsScreen }
});

const App = () => (
  <Provider store={createStore(rootReducer)}>
    <AppWithNavigation />
  </Provider>
);

export default App;
