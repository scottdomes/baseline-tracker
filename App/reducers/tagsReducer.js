import {
  SET_LOADED_TAGS
} from '../constants';

const DEFAULT_STATE = {
  loadedTags: [],
};

const tagsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADED_TAGS:
      return Object.assign({}, state, { loadedTags: action.payload });
    default:
      return state;
  }
};
export default tagsReducer;
