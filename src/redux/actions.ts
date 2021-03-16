// Functions that take an argument and returns an action, which consists of a type and a payload

import { ActionTypes } from "./constant";

export const setUsers = (users) => ({ 
    type: ActionTypes.SET_USERS, 
    payload: users 
})