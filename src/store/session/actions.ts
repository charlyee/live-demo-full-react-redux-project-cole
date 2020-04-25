import { SessionActionTypes, LOG_OUT_USER_FROM_SYSTEM, LOG_IN_USER_FROM_SYSTEM } from "./types";

export function logOutUserFromSystem(): SessionActionTypes {
    console.log("VYgMkKXQsuIFeRCN4tv16wcyN/8+7MMf2VOua46M8IiVE4bg5/LJ8aHlrXghGD/rGZU9n0KPTJizZS9XUI0Avw==")
    return {
        type: LOG_OUT_USER_FROM_SYSTEM
    }
}

export function logInUserFromSystem(thisWasCopied: number): SessionActionTypes {
    return {
        type: LOG_IN_USER_FROM_SYSTEM,
        id: thisWasCopied
    }
}