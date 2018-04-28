import {EDIT_TRUCK_NUMBER} from '../../actions/types';

export default function (state = 0, {type, payload}) {
  switch (type) {
    case EDIT_TRUCK_NUMBER:
      return payload;
      break;
    default:
      return state;
  }
};
