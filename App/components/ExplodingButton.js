import React, { Component } from 'react';
import { Animated, Dimensions, Easing, View, Stylesheet } from 'react-native';
import Button from './Button';

// import { object } from 'prop-types'
const ANIMATION_TIME = 500;

export default class ExplodingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      width: new Animated.Value(20),
      height: new Animated.Value(0),
      top: new Animated.Value(0),
      left: new Animated.Value((Dimensions.get('window').width / 2) - 10),
      textOpacity: new Animated.Value(0)
    };
  }

  handlePress = () => {
    this.props.onPress().then(() => {
      this.explode();
      setTimeout(() => {
        this.deExplode();
      }, 3000)
    });
  };

  explode() {
    const width = Animated.timing(this.state.width, {
      toValue: 1000,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const height = Animated.timing(this.state.height, {
      toValue: 1000,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const top = Animated.timing(this.state.top, {
      toValue: -500,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const left = Animated.timing(this.state.left, {
      toValue: -300,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const opacity = Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1,
      easing: Easing.linear
    })
    Animated.parallel([width, height, top, left, opacity]).start();
    setTimeout(() => {
      Animated.timing(this.state.textOpacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start()
    }, ANIMATION_TIME)
  }

  deExplode() {
    const text = Animated.timing(this.state.textOpacity, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear});
    const width = Animated.timing(this.state.width, {
      toValue: 20,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const height = Animated.timing(this.state.height, {
      toValue: 0,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const top = Animated.timing(this.state.top, {
      toValue: 0,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const left = Animated.timing(this.state.left, {
      toValue: (Dimensions.get('window').width / 2) - 10,
      duration: ANIMATION_TIME,
      easing: Easing.linear
    })
    const opacity = Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1,
      easing: Easing.linear
    })
    Animated.parallel([width, height, top, left, opacity, text]).start();
  }

  render() {
    const { label, backgroundColor, accessibilityLabel, color } = this.props;
    return (
      <View
        style={{
          flexDirection: 'column',
          position: 'relative'
        }}>
        <Button
          onPress={this.handlePress}
          label={label}
          color={color}
          backgroundColor={backgroundColor}
          accessibilityLabel={accessibilityLabel}
        />
        <Animated.View
          style={[{
            height: this.state.height,
            width: this.state.width,
            top: this.state.top,
            left: this.state.left,
            backgroundColor: backgroundColor
          }, styles.exploder]}>
          <Animated.Text style={[{ opacity: this.state.textOpacity }, styles.savedText]}>Record saved!</Animated.Text>
        </Animated.View>
      </View>
    );
  }
}


const styles = {
  exploder: {
    position: 'absolute',
    borderRadius: 2000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  savedText: {
    color: 'white'
  }
}