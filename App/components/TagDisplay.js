import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { loadTagsAction, changeRecordTagsAction } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tag from './Tag';

class TagDisplay extends Component {
  componentDidMount() {
    this.props.loadTags();
  }

  handleTagPress(tag) {
    this.props.selectTag(tag);
  }

  render() {
    const { loadedTags, addedTags } = this.props;
    const loadedTagsText = loadedTags.map(tag => tag.text);
    return (
      <View style={styles.container}>
        {addedTags.map(tag => {
          return loadedTagsText.indexOf(tag) > -1 ? null : <Tag key={tag} text={tag} />;
        })}
        {loadedTags.map(tag => (
          <Tag
            onPress={this.handleTagPress.bind(this, tag.text)}
            key={tag._id}
            selected={addedTags.indexOf(tag.text) > -1}
            text={tag.text}
          />
        ))}
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
};

function mapStateToProps(state) {
  return {
    loadedTags: state.tags.loadedTags,
    addedTags: state.newRecord.tags
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadTags: loadTagsAction,
      selectTag: changeRecordTagsAction
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDisplay);
