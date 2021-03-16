import { createSelector } from "reselect"

// Use global state. homePageReducer is from the store
export const homePageState = (state) => state.homePageReducer

export const makeSelectUsers = createSelector(
    homePageState, 
    (homePage) => homePage.users
)