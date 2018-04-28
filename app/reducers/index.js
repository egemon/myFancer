import {combineReducers} from 'redux';

import competitors from './competitors';
import truckNumber from './truckNumber';

export default combineReducers({
  truckNumber,
  competitors,
});
