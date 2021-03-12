import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    contactsPage: contactReducer,
    friendsPage: friendsReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store;