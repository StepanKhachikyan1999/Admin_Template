import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducer from './rootReducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer,applyMiddleware(thunk));
const persister = 'Free';

export { store, persister };