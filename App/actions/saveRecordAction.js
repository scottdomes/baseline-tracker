import { SAVE_RECORD } from '../constants';
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
      sauce => console.log(sauce),
      error => console.log(error)
    );
  };
}
