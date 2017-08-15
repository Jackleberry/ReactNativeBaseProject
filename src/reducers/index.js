import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import feathersAuthentication from '../feathers/auth';
import services from './services';

const rootReducer = combineReducers({
  form: formReducer,
  users: services.users.reducer,
  auth: feathersAuthentication.reducer,
});

export default rootReducer;
