import newRecordReducer from './newRecordReducer';
import tagsReducer from './tagsReducer';
import { combineReducers } from 'redux';

export default rootReducer = combineReducers({
    newRecord: newRecordReducer,
    tags: tagsReducer
});