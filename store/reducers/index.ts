import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';
import { playerReducer } from './playerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  track: trackReducer,
  player: playerReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    if (state.count) nextState.count = state.count;
    // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
