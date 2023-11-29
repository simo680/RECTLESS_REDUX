import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { stringReducer } from "./stringReducer";
import { userReducer } from "./usersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  count: countReducer,
  string: stringReducer,
  users: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
