// import { createStore } from "redux";
import rootReducer from "./reducers";
import applyMiddleware from '../reduxResource/applyMiddleware';
import createStore from '../reduxResource/createStore'

import thunk1 from "./middlewares/thunk1";
import thunk2 from "./middlewares/thunk2";
import logger from "redux-logger";

export default applyMiddleware(thunk1,thunk2,logger)(createStore)(rootReducer);