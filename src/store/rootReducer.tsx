import { combineReducers } from 'redux';

import statusReducer from './status/status';

const rootReducer = combineReducers({
  status: statusReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
