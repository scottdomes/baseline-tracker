import { SELECT_VALUE } from '../constants';

export default function(value) {
  return {
    type: SELECT_VALUE,
    payload: value
  };
}
