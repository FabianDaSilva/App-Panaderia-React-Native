import {FILTERED_BREAD, SELECT_BREAD} from '../actions/bread.action';

import {BREADS} from '../../data/breads';

const initialState = { 
	breads: BREADS,
	filteredBread: [],
	selected: null
 }

const BreadReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_BREAD:
			return {
				...state,
				selected: state.breads.find((bread) => bread.id === action.breadID),
			};
		case FILTERED_BREAD:
			return {
				...state,
				filteredBread: state.breads.filter(
					(bread) => bread.category === action.categoryID
				),
			};
		default:
			return state;
	}
};
export default BreadReducer;
