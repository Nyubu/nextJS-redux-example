import { createSelector } from "reselect"

// Use global state. userPageReducer is from the store
export const userPageState = (state) => state.userPageReducer

export const makeSelectUser = createSelector(
    userPageState, 
    (userPage) => userPage.user
)