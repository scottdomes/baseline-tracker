import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  HomeScreen,
  StatsScreen,
  SettingsScreen
} from './screens';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Stats: { screen: StatsScreen },
  Settings: { screen: SettingsScreen }
});

export default App;