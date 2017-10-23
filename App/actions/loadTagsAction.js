import setLoadedTags from './setLoadedTagsAction'

import FetchResource from '../resources/FetchResource'
import config from '../config'

function load() {
  return FetchResource.get(`${config.API_URL}/tags`)
  // return Promise.resolve()
}

export default function loadTags() {
  return function(dispatch) {
    return load().then(
      res => {
        dispatch(setLoadedTags(res))
        // dispatch(changeRecordTags())
        // dispatch(selectValue(null))
      },
      error => console.log(error)
    );
  };
}
