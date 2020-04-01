import { createStore } from "redux";
import rootReducer from "./reducers";
import applyMiddleware from '../reduxResource/applyMiddleware'

import thunk1 from "./middlewares/thunk1";
import thunk2 from "./middlewares/thunk2";
import thunk3 from "./middlewares/thunk3";

import thunk from "redux-thunk";

export default applyMiddleware(thunk1,thunk2,thunk3)(createStore)(rootReducer);