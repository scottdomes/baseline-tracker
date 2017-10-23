import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  loadTagsAction
} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TagDisplay extends Component {
  componentDidMount() {
    this.props.loadTags()
  }

  render() {
    const { loadedTags, addedTags } = this.props;

    return (
      <View>
        {addedTags.map(tag => <Text key={tag}>{tag}</Text>)}
        {loadedTags.map(tag => <Text key={tag._id}>{tag.text}</Text>)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loadedTags: state.tags.loadedTags,
    addedTags: state.newRecord.tags,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadTags: loadTagsAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDisplay);
