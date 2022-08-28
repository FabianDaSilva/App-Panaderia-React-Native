import { applyMiddleware, combineReducers, createStore } from 'redux'

import AuthReducer from './reducers/auth.reducer';
import BreadReducer from './reducers/breads.reducer';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/categories.reducer';
import OrderReducer from './reducers/order.reducer';
import PlaceReducer from './reducers/place.reducer';
import thunk from 'redux-thunk'

// Reducers







const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    order: OrderReducer,
    auth: AuthReducer,
    places: PlaceReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))