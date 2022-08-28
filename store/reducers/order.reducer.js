import { DELETE_ORDER, GET_ORDERS } from "../actions/order.action";

const initialState = {
    list: [],
}

const OrderReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                list: action.payload,
            }
        case DELETE_ORDER:
            const filteredOrders = state.list.filter(item => item.id !== action.orderID);
            return {
                ...state,
                list: filteredOrders
            }
            default: 
                return state;
    }
}

export default OrderReducer;