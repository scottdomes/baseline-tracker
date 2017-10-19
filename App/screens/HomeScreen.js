import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation
} from 'react-native'
import AnimatedButton from '../components/AnimatedButton'
import { COLORS } from '../components/Theme'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedButtonIndex: null
    }
  }

  handlePress(selectedButtonIndex) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (this.state.selectedButtonIndex === selectedButtonIndex) {
      this.setState({ selectedButtonIndex: null })
    } else {
      this.setState({ selectedButtonIndex })
    }
  }
  
  renderButtons() {
    return Array.from(Array(10).keys()).map(number => {
      const num = number + 1
      console.log(this.state.selectedButtonIndex === number)
      const isSelected = this.state.selectedButtonIndex === number
      return (
        <AnimatedButton
          isSelected={isSelected}
          key={`button${num}`}
          onPress={this.handlePress.bind(this, number)}
          label={`${num}`}
          color="#000000"
          backgroundColor={COLORS[number]}
          accessibilityLabel={`Choose rating of ${num}`}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {this.renderButtons()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  button: {
    backgroundColor: '#baffc9'
  }
})
