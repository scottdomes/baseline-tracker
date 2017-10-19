import React from 'react'
import { TouchableOpacity, Text, View, Animated } from 'react-native'

export default function Button({ label, onPress, backgroundColor, color, style, textStyles }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Animated.View style={[styles.container, style, { backgroundColor: backgroundColor}]}>
        <Animated.Text style={[styles.text, textStyles, { color: color, backgroundColor: 'transparent' }]}>{label}</Animated.Text>
      </Animated.View>
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