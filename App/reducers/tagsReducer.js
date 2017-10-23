import { SET_LOADED_TAGS, ADD_TAG_OPTION } from '../constants';

const DEFAULT_STATE = {
  loadedTags: []
};

const tagsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADED_TAGS:
      return Object.assign({}, state, { loadedTags: action.payload });
    case ADD_TAG_OPTION:
      const tags = state.loadedTags.slice()
      tags.push({ text: action.payload, _id: Math.random() })
      return Object.assign({}, state, { loadedTags: tags });
    default:
      return state;
  }
};
export default tagsReducer;
