import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import AnimatedButton from '../components/AnimatedButton';
import { COLORS } from '../components/Theme';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButtonIndex: null,
      containerHeight: new Animated.Value(Dimensions.get('window').height)
    };
  }

  handlePress(selectedButtonIndex) {
    if (this.state.selectedButtonIndex === selectedButtonIndex) {
      this.setState({ selectedButtonIndex: null });
    } else {
      this.setState({ selectedButtonIndex });
    }
  }

  renderButtons() {
    return Array.from(Array(10).keys()).map(number => {
      const num = number + 1;
      const isSelected = this.state.selectedButtonIndex === number;
      const shouldDisappear = Boolean(this.state.selectedButtonIndex && !isSelected)
      return (
        <AnimatedButton
          isSelected={isSelected}
          shouldDisappear={shouldDisappear}
          key={`button${num}`}
          onPress={this.handlePress.bind(this, number)}
          label={`${num}`}
          color="#000000"
          backgroundColor={COLORS[number]}
          accessibilityLabel={`Choose rating of ${num}`}
        />
      );
    });
  }

  render() {
    return (
      <Animated.View
        style={[{ height: this.state.containerHeight }, styles.container]}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {this.renderButtons()}
        </ScrollView>
      </Animated.View>
    );
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
});
