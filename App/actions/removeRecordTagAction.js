import { REMOVE_RECORD_TAG } from '../constants';

export default function removeRecordTag(value) {
  return {
    type: REMOVE_RECORD_TAG,
    payload: value
  };
}
