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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelledTextInput from '../components/LabelledTextInput';
import AnimatedButton from '../components/AnimatedButton';
import selectValueAction from '../actions/selectValueAction';
import { COLORS } from '../components/Theme';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: new Animated.Value(Dimensions.get('window').height)
    };
  }

  handlePress(value) {
    if (this.props.value === value) {
      this.props.selectValue(null)
    } else {
      this.props.selectValue(value)
    }
  }

  renderButtons() {
    return Array.from(Array(10).keys()).map(number => {
      const num = number + 1;
      const isSelected = this.props.value === num;
      const shouldDisappear = Boolean(
        this.props.value && !isSelected
      );
      return (
        <AnimatedButton
          isSelected={isSelected}
          shouldDisappear={shouldDisappear}
          key={`button${num}`}
          onPress={this.handlePress.bind(this, number + 1)}
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
          <LabelledTextInput />
        </ScrollView>
      </Animated.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.newRecord.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectValue: selectValueAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
