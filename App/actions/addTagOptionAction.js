import { ADD_TAG_OPTION } from '../constants';

export default function addTagOption(value) {
  return {
    type: ADD_TAG_OPTION,
    payload: value
  };
}
