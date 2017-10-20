import { CHANGE_RECORD_TAGS } from '../constants';

export default function changeRecordTags(value) {
  return {
    type: CHANGE_RECORD_TAGS,
    payload: value
  };
}
