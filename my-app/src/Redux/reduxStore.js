import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    contactsPage: contactReducer,
    friendsPage: friendsReducer
})

let store = createStore(reducers)

export default store;