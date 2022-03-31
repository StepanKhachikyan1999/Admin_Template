import {GET_POSTS} from "../types/albumTypes";

const initialState = {
    posts :  [],
}

export const albumReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS:
            return {
                ...state,
                posts : [...state.posts , action.payload.data]
            }
        default:
            return state
    }
}