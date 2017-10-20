import { SAVE_RECORD } from '../constants';

function postRecord(value) {
  console.log(value);
  return fetch('https://www.google.com/search?q=secret+sauce');
}

export default function saveRecord(value) {
  return function(dispatch) {
    return postRecord(value).then(
      sauce => console.log(sauce),
      error => console.log(err)
    );
  };
}
