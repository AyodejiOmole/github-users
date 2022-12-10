import { actionTypes } from "../constants";

const initialState = {
    gitHubUsers: []
}

export const usersReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_USERS:
            return {...state, gitHubUsers: payload};
        default:
            return state;
    }
}

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_SELECTED_USER:
            return {...state, ...payload};
        case actionTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
}