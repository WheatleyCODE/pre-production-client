import thunk from 'redux-thunk';
import { RootState } from './reducers/index';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { reducer } from './reducers';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const makeStore: MakeStore<Store<RootState>> = (context: Context) =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
