import { combineReducers } from "redux";
import counterReducer from "./couter";
import productReducer from "./product";

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>