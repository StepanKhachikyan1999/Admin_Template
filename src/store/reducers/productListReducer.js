import React from 'react';
import {GET_ACTION} from "../actions/courses.action";



export const ProductListReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_ACTION:
            return {
                ... state,
                postCourse:[... state.postCourse,action.payload]
            }
       default:
          return  state
    }
 };
 
 