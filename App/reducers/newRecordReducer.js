import {
  SELECT_VALUE,
  CHANGE_RECORD_LOCATION,
  CHANGE_RECORD_TAGS,
  SAVE_RECORD,
  REMOVE_RECORD_TAG
} from '../constants';

const DEFAULT_STATE = {
  value: null,
  tags: [],
  location: ''
};

const newRecordReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_VALUE:
      return Object.assign({}, state, { value: action.payload });
    case CHANGE_RECORD_LOCATION:
      return Object.assign({}, state, { location: action.payload });
    case REMOVE_RECORD_TAG:
    console.log(action.payload)
      const oldTags = state.tags.filter(tag => {
        return tag !== action.payload;
      });
      return Object.assign({}, state, { tags: oldTags });
    case CHANGE_RECORD_TAGS:
      const tags = state.tags.slice();
      tags.push(action.payload);
      return Object.assign({}, state, { tags });
    default:
      return state;
  }
};
export default newRecordReducer;
