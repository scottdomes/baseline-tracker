import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnimatedButton from '../components/AnimatedButton';
import {
  selectValueAction,
  changeRecordLocationAction,
  changeRecordTagsAction,
  saveRecordAction,
  addTagOptionAction
} from '../actions';
import { COLORS } from '../components/Theme';
import LabelledTextInput from '../components/LabelledTextInput';
import ExplodingButton from '../components/ExplodingButton';
import TagDisplay from '../components/TagDisplay';

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
      this.props.addTagOption(this.state.newTag)
      this.props.changeTags(this.state.newTag);
      this.setState({ newTag: '' });
    } else {
      const newTag = this.state.newTag + key
      this.setState({ newTag })
    }
  };

  handleSave = () => {
    const { value, location, tags, saveRecord } = this.props
    return saveRecord({
      type: 'happiness',
      value,
      location,
      tags
    })
  }

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
        <TagDisplay />
        <ExplodingButton label="Save" backgroundColor={COLORS[1]} onPress={this.handleSave} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.newRecord.value,
    tags: state.newRecord.tags,
    location: state.newRecord.location,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectValue: selectValueAction,
      changeTags: changeRecordTagsAction,
      changeLocation: changeRecordLocationAction,
      saveRecord: saveRecordAction,
      addTagOption: addTagOptionAction
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordEntryForm);
