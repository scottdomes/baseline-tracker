import { SELECT_VALUE } from '../constants';

export default function selectValue(value) {
  return {
    type: SELECT_VALUE,
    payload: value
  };
}
