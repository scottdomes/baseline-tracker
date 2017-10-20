import React from 'react';
import { Animated, Dimensions, Easing, View } from 'react-native';
import Button from './Button';

export default class AnimatedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.75), // Initial value for opacity: 0
      width: new Animated.Value(Dimensions.get('window').width),
      height: new Animated.Value(55),
      borderRadius: new Animated.Value(0),
      textOpacity: new Animated.Value(1)
    };
  }

  componentWillReceiveProps(next) {
    console.log(next.isSelected, this.props.isSelected);
    if (next.isSelected && !this.props.isSelected) {
      this.select();
    } else if (!next.isSelected && this.props.isSelected) {
      this.deselect();
    }
    if (next.shouldDisappear && !this.props.shouldDisappear) {
      console.log('disppear')
      this.disappear();
    }
    if (!next.shouldDisappear && this.props.shouldDisappear) {
      this.reappear()
    }
  }

  disappear() {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear
    }).start();
    Animated.timing(this.state.height, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  reappear() {
    setTimeout(() => {
      Animated.timing(this.state.opacity, {
      toValue: .75,
      duration: 100,
      easing: Easing.linear
    }).start();
    }, 500)
    Animated.timing(this.state.height, {
      toValue: 55,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  select() {
    const widthAnimation = Animated.timing(this.state.width, {
      toValue: 72,
      duration: 500,
      easing: Easing.linear
    });
    const borderAnimation = Animated.timing(this.state.borderRadius, {
      toValue: 1000,
      duration: 500,
      easing: Easing.linear
    });
    const textAnimation = Animated.timing(this.state.textOpacity, {
      toValue: 0,
      duration: 100
    });
    setTimeout(() => {
      Animated.timing(this.state.textOpacity, {
        toValue: 1,
        duration: 100
      }).start();
    }, 400);
    Animated.parallel([widthAnimation, borderAnimation, textAnimation]).start();
  }

  deselect() {
    const widthAnimation = Animated.timing(this.state.width, {
      toValue: Dimensions.get('window').width,
      duration: 500,
      easing: Easing.linear
    });
    const borderAnimation = Animated.timing(this.state.borderRadius, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear
    });
    const textAnimation = Animated.timing(this.state.textOpacity, {
      toValue: 0,
      duration: 100
    });
    setTimeout(() => {
      Animated.timing(this.state.textOpacity, {
        toValue: 1,
        duration: 100
      }).start();
    }, 400);
    Animated.parallel([widthAnimation, borderAnimation, textAnimation]).start();
  }

  render() {
    const {
      onPress,
      label,
      backgroundColor,
      accessibilityLabel,
      color
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'column'
        }}>
        <Animated.View style={{ borderRadius: this.state.borderRadius, height: this.state.height, opacity: this.state.opacity, width: this.state.width, alignSelf: 'center' }}>
          <Button
            onPress={onPress}
            label={label}
            style={{ borderRadius: this.state.borderRadius }}
            color={color}
            textStyles={{ opacity: this.state.textOpacity }}
            backgroundColor={backgroundColor}
            accessibilityLabel={accessibilityLabel}
          />
        </Animated.View>
      </View>
    );
  }
}
