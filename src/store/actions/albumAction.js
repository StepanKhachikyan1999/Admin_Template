import axios from "axios";
import {GET_POSTS} from "../types/albumTypes";

export const getPostsThunk = () => {
    return async dispatch => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
        dispatch({
            type: GET_POSTS,
            payload: response
        })
    }
}