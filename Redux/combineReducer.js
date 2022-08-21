import { combineReducers } from 'redux';
import counterReducer from "./counterSlice";
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer
})

export default rootReducer
