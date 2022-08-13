import {combineReducers, createStore} from 'redux';

import BreadReducer from './reducers/breads.reducer';
import CategoryReducer from './reducers/categories.reducer';

const RootReducer = combineReducers({
	categories: CategoryReducer,
	breads: BreadReducer,
});
export default createStore(RootReducer);
