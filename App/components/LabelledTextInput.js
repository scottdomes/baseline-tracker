import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
// import { object } from 'prop-types'

export default class LabelledTextInput extends Component {
  render() {
    const { label, value, onChangeText, onKeyPress } = this.props;
    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <TextInput
          style={styles.input}
          onKeyPress={onKeyPress}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
