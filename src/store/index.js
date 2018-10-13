import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as rootReducer from '../reducers';
import { firstAction } from '../actions/testAction';

const combinedRootReducer = combineReducers({
	...rootReducer
});

const store = createStore(combinedRootReducer, {}, applyMiddleware(thunk));
store.dispatch(firstAction());

export default store;
