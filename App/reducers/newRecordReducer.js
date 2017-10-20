import { SELECT_VALUE } from '../constants';

const DEFAULT_STATE = {
  value: null
};

const newRecordReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_VALUE:
      return Object.assign({}, state, { value: action.payload })
    default:
      return state;
  }
};
export default newRecordReducer;
