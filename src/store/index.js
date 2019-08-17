import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import createBrowserHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as rootReducer from '../reducers';
import { firstAction } from '../actions/testAction';

export const history = createBrowserHistory({});

const combinedRootReducer = combineReducers({
	...rootReducer,
	router: connectRouter(history)
});

const middleware = [thunk, routerMiddleware(history), logger];
export const store = createStore(combinedRootReducer, {}, applyMiddleware(...middleware));

store.dispatch(firstAction(store.dispatch));
