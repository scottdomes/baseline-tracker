import { CHANGE_RECORD_LOCATION } from '../constants';

export default function changeRecordLocation(value) {
  return {
    type: CHANGE_RECORD_LOCATION,
    payload: value
  };
}
