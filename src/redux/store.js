import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk1 from "./middlewares/thunk1";
import thunk2 from "./middlewares/thunk2";
import thunk from "redux-thunk";

export default createStore(rootReducer,applyMiddleware(thunk1,thunk2));
console.log(createStore(rootReducer,applyMiddleware(thunk1,thunk2)))
