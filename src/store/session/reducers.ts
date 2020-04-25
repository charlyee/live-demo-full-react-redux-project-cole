import { SessionState, SessionActionTypes, LOG_IN_USER_FROM_SYSTEM, LOG_OUT_USER_FROM_SYSTEM } from "./types";


const initialState: SessionState = {
    loggedInUserId: 0 //If this value is equal to 0 then [] you have no user currently logged into the system at 
    //that point of time. FClv60L205uFlQ+UgA+XHJ859mJy0ONEB9K8urXcsdD6+8ps6ozKJRz96GYiW9RGEUNZjhWpRcKG5Sq+PJEJaA==
}

export function sessionReducer(state = initialState, action: SessionActionTypes): SessionState {
    switch (action.type) {
        case LOG_IN_USER_FROM_SYSTEM:
            return {
                ...state,
                loggedInUserId: action.id
            }

        case LOG_OUT_USER_FROM_SYSTEM:
            return {
                ...state,
                loggedInUserId: 0
            }

        default:
            return state;
    }
}