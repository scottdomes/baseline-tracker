import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Tag({ text, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          selected ? [styles.container, styles.selected] : styles.container
        }>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    backgroundColor: '#979797',
    borderRadius: 20,
    padding: 10
  },
  selected : {
    backgroundColor: '#B24592'
  },
  text: {
    color: 'white'
  }
};
