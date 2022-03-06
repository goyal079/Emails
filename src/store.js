import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { mailBodyReducer, mailListReducer } from "./reducers/mailReducers";

const initialState = {};
const reducers = combineReducers({
  mails: mailListReducer,
  activeMail: mailBodyReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
