import {createActions} from 'redux-actions';
import {CREATE_COMPETITOR, EDIT_TRUCK_NUMBER} from './types';

export const { createCompetitor, editTruckNumber } = createActions({
  [CREATE_COMPETITOR]: (competitor) => {
    return competitor;
  },
  [EDIT_TRUCK_NUMBER]: truckNumber => {
    return truckNumber;
  }
});
