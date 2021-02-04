import {combineReducers} from 'redux';
import {home} from './reducer';

export const rootReducer = combineReducers({
  home,
});

export type RootStateType = ReturnType<typeof rootReducer>;
