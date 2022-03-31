import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import {albumReducer} from "./reducers/albumReducer";
import {serviceReducer} from "./reducers/serviceReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
     albumReducer,
    serviceReducer,
});

export default reducer;
