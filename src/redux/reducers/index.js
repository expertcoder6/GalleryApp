import { combineReducers } from "redux";
import appReducers from './app';

const rootReducer = combineReducers({
    appDetails: appReducers,
});

export default rootReducer;