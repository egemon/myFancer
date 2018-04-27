import { createActions, handleActions, combineActions } from 'redux-actions';
import {CREATE_COMPETITOR, EDIT_TRUCK_NUMBER} from './types';

let id = 0;
export const { creatCompetitor, editTruckNumber } = createActions({
  [CREATE_COMPETITOR]: (name) => {
    return {id: id++, name};
  },
  [EDIT_TRUCK_NUMBER]: truckNumber => ({ truckNumber})
});
