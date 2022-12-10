import { actionTypes } from "../constants";

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        payload: users
    }
}

export const setSelectedUser = (user) => {
    return {
        type: actionTypes.SET_SELECTED_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_USER
    }
}