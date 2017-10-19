import React from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
import Button from './Button';

export default class AnimatedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.75), // Initial value for opacity: 0
      width: new Animated.Value(Dimensions.get('window').width)
    };
  }

  componentWillReceiveProps(next) {
    console.log(next.isSelected, this.props.isSelected);
    if (next.isSelected && !this.props.isSelected) {
      this.select();
    } else if (!next.isSelected && this.props.isSelected) {
      this.deselect();
    }
  }

  select() {
    const widthAnimation = Animated.timing(this.state.width, {
      toValue: 100,
      duration: 500,
      easing: Easing.linear
    });
    Animated.parallel([widthAnimation]).start();
  }

  deselect() {
    const widthAnimation = Animated.timing(this.state.width, {
      toValue: Dimensions.get('window').width,
      duration: 500,
      easing: Easing.linear
    });
    Animated.parallel([widthAnimation]).start();
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
      <Animated.View style={this.state}>
        <Button
          onPress={onPress}
          label={label}
          color={color}
          backgroundColor={backgroundColor}
          accessibilityLabel={accessibilityLabel}
        />
      </Animated.View>
    );
  }
}
