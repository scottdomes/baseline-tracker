import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

export default function Button({ label, onPress, backgroundColor, color, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable, style]}>
      <View backgroundColor={backgroundColor} style={[styles.container]}>
        <Text style={[styles.text, { color: color, backgroundColor: 'transparent' }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const TOUCHABLE_MARGIN = 10
const CONTAINER_PADDING = 20
const styles = {
  touchable: {
    marginTop: TOUCHABLE_MARGIN,
    marginBottom: TOUCHABLE_MARGIN,
    marginLeft: TOUCHABLE_MARGIN,
    marginRight: TOUCHABLE_MARGIN
  },
  container: {
    justifyContent: 'center',
    paddingTop: CONTAINER_PADDING,
    paddingBottom: CONTAINER_PADDING
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center'
  }
}