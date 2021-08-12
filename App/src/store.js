import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userLoginReducer} from "./reducers/userReducer"

const reducer=combineReducers({
  userLogin:userLoginReducer,

})

const initialState={}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store
