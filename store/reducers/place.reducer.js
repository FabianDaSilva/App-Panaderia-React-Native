import { ADD_PLACE, LOAD_PLACES } from '../actions/places.action'

import Place from '../../models/Place'

// models


const initialState = {
    places: []
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = { id: action.payload.id.toString(), title: action.payload.title, image: action.payload.image, address: action.payload.address, lat: action.payload.lat, lng: action.payload.lng }
            return {
                ...state,
                places: [...state.places, newPlace]
            }
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => (
                    {    id: item.id.toString(),
                        title: item.title,
                        image: item.image,
                        address: item.address,
                        lat: item.lat,
                        lng: item.lng
                    }
                ))
            }
        default:
            return state
    }
}