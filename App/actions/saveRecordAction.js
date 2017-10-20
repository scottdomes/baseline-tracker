import { SAVE_RECORD } from '../constants';
import changeRecordLocation from './changeRecordLocationAction'
import changeRecordTags from './changeRecordTagsAction'
import selectValue from './selectValueAction'

import FetchResource from '../resources/FetchResource'
import config from '../config'

function postRecord(value) {
  // return FetchResource.post(`${config.API_URL}/records`, value)
  console.log('post')
  return Promise.resolve()
}

export default function saveRecord(value) {
  return function(dispatch) {
    return postRecord(value).then(
      sauce => {
        dispatch(changeRecordLocation(''))
        // dispatch(changeRecordTags())
        // dispatch(selectValue(null))
      },
      error => console.log(error)
    );
  };
}
