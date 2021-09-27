import { reducer } from './reducers/rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { RootState } from './reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
