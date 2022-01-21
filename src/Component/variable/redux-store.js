import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduxer";

let reducers = combineReducers({
    postPage: postPageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;