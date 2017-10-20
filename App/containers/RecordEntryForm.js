import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnimatedButton from '../components/AnimatedButton';
import selectValueAction from '../actions/selectValueAction';
import { COLORS } from '../components/Theme';
import LabelledTextInput from '../components/LabelledTextInput';

class RecordEntryForm extends Component {
  handlePress(value) {
    if (this.props.value === value) {
      this.props.selectValue(null);
    } else {
      this.props.selectValue(value);
    }
  }

  renderButtons() {
    return Array.from(Array(10).keys()).map(number => {
      const num = number + 1;
      const isSelected = this.props.value === num;
      const shouldDisappear = Boolean(this.props.value && !isSelected);
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
      <View>
        {this.renderButtons()}
        <LabelledTextInput />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecordEntryForm);
