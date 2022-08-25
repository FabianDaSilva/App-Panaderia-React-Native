import {ADD_ITEM, REMOVE_ITEM} from '../actions/cart.actions';

import {CART} from '../../data/cart';

const INITIAL_STATE = {
	items: CART,
	total: 27000,
};

const sumTotal = (list) =>
	list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			let updateCart = [];

			if (state.items.find((item) => item.id === action.item.id)) {
				updateCart = state.items.map((item) => {
					if (item.id === action.item.id) item.quantity++;
					return item;
				});
			} else {
				const item = {...action.item, quantity: 1};
				updateCart = [...state.items, item];
			}
			return {
				...state,
				items: updateCart,
				total: sumTotal(updateCart),
			};
		case REMOVE_ITEM:
			const filteredCart = state.items.filter(
				(item) => item.id !== action.itemID
			);
			return {
				...state,
				items: filteredCart,
				total: sumTotal(filteredCart),
			};

		case 'CONFIRM_CART':
			return {
				...state,
				items: [],
				total: 0,
			};

		default:
			return state;
	}
};

export default CartReducer;
