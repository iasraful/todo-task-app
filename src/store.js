/** @format */

import { applyMiddleware, createStore } from "redux";
import taskReducers from "./redux/reducers/taskReducers";
import thunk from "redux-thunk";

const store = createStore(taskReducers, applyMiddleware(thunk));
export default store;
