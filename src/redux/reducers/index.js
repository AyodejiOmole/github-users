import { combineReducers } from "redux";
import { usersReducer, selectedUserReducer } from "./userReducers";

const reducers = combineReducers(
    {
        users: usersReducer,
        selectedUser: selectedUserReducer
    }
);

export default reducers;