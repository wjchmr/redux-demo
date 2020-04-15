import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from './redux/store'
import Count from './components/Count'

ReactDOM.render(
    <Provider store={store}>
        <Count />
    </Provider>,
    document.getElementById("root")
);
