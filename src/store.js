import { createStore, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";

const middleware = [thunk];

const store = createStore(authReducer, applyMiddleware(...middleware));

export default store;