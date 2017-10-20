import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnimatedButton from '../components/AnimatedButton';
import {
  selectValueAction,
  changeRecordLocationAction,
  changeRecordTagsAction
} from '../actions';
import { COLORS } from '../components/Theme';
import LabelledTextInput from '../components/LabelledTextInput';

class RecordEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTag: ''
    };
  }
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

  handleLocationChange = text => {
    this.props.changeLocation(text);
  };

  handleNewTagKeyDown = e => {
    const { key } = e.nativeEvent;
    if (key === ',' || key === ' ') {
      this.props.changeTags(this.state.newTag);
      this.setState({ newTag: '' });
    } else {
      const newTag = this.state.newTag + key
      this.setState({ newTag })
    }
  };

  render() {
    const { tags, location } = this.props;
    return (
      <View>
        {this.renderButtons()}
        <LabelledTextInput
          label="Location"
          value={location}
          onChangeText={this.handleLocationChange}
        />
        <LabelledTextInput
          label="Tags"
          value={this.state.newTag}
          onKeyPress={this.handleNewTagKeyDown}
        />
        {tags.map(tag => <Text key={tag}>{tag}</Text>)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.newRecord.value,
    tags: state.newRecord.tags,
    location: state.newRecord.location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectValue: selectValueAction,
      changeTags: changeRecordTagsAction,
      changeLocation: changeRecordLocationAction
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordEntryForm);
