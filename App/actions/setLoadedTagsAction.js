import { SET_LOADED_TAGS } from '../constants';

export default function setLoadedTags(value) {
  return {
    type: SET_LOADED_TAGS,
    payload: value
  };
}
