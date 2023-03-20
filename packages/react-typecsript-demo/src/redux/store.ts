import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const enhancer = applyMiddleware(
  thunk,
);

const store = createStore(
  reducers,
  composeWithDevTools(
    enhancer,
    // other store enhancers if any
  ),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
