import axios from 'axios'
import {GET_DATA} from "../types/albumTypes";

export const getDataThunk = () => {
    return async dispatch => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: GET_DATA,
            payload: response['data']
        })
    }
}