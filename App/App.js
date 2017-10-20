import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import { HomeScreen, StatsScreen, SettingsScreen } from './screens';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const AppWithNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Stats: { screen: StatsScreen },
  Settings: { screen: SettingsScreen }
});

const App = () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);

export default App;
