// Functions that take an argument and returns an action, which consists of a type and a payload

import { ActionTypes } from "./constants";

export const setUser = (user) => ({ 
    type: ActionTypes.SET_USER, 
    payload: user 
})