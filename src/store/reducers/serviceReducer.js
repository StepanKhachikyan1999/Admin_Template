import {GET_DATA} from "../types/albumTypes";

const initialState = {
    posts: []
}

export const serviceReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}