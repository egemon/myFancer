import {CREATE_COMPETITOR, EDIT_TRUCK_NUMBER} from '../actions/types';
import { createActions, handleActions, combineActions } from 'redux-actions';

export default handleActions({
  [CREATE_COMPETITOR]: (state, {payload}) => ({
    ...state,
    competitors: state.competitors.concat(payload)
  }),
  [EDIT_TRUCK_NUMBER]: (state, {payload}) => ({
    ...state,
    truckNumber: payload,
  }),
}, {
  competitors: [],
  truckNumber: '0',
});
