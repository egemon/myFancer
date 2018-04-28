import {CREATE_COMPETITOR} from '../../actions/types';

let id = 0;
export default function (state = [], {type, payload}) {
  switch (type) {
    case CREATE_COMPETITOR:
      return state.concat({
        ...payload,
        id: '' + id++,
      });
      break;
    default:
      return state;
  }
};


