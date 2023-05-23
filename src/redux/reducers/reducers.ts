import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import formSlice from "./formSlice";
import loaderSlicer from "./loaderSlicer";

const rootReducer = combineReducers({
  form: formSlice,
  counter: counterReducer,
  loader: loaderSlicer
});

export default rootReducer;
