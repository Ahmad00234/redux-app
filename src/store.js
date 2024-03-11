import { createStore } from "redux";
import rootReducer from "./Reducers"; // Assuming you have a rootReducer defined

const store = createStore(rootReducer); // Pass the rootReducer as a parameter

export default store;
