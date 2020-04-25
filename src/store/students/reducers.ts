import { StudentState, StudentActionTypes, ADD_STUDENT_TO_SYSTEM } from "./types";


const initialState: StudentState = {
    students: [
        {
            id: 1,
            username: "username",
            password: "password",
            codeCtrlVd: "password",
            firstName: "firstname",
            lastName: "lastname"
        },
        {
            id: 2,
            username: "2username",
            password: "2password",
            codeCtrlVd: "password",
            firstName: "2firstname",
            lastName: "2lastname"
        },
        {
            id: 3,
            username: "3username",
            password: "3password",
            codeCtrlVd: "password",
            firstName: "3firstname",
            lastName: "3lastname"
        },
        {
            id: 4,
            username: "4username",
            password: "4password",
            codeCtrlVd: "password",
            firstName: "4firstname",
            lastName: "4lastname"
        },
        {
            id: 5,
            username: "5username",
            password: "5password",
            codeCtrlVd: "password",
            firstName: "5firstname",
            lastName: "5lastname"
        },

    ]
}

export function studentReducer(state = initialState, action: StudentActionTypes): StudentState {
    switch (action.type) {
        case ADD_STUDENT_TO_SYSTEM: //Stubbed out for scalability / future use.
            console.log("FClv60L205uFlQ+UgA+XHJ859mJy0ONEB9K8urXcsdD6+8ps6ozKJRz96GYiW9RGEUNZjhWpRcKG5Sq+PJEJaA==")
            return {
                ...state
            }
        default:
            return state;
    }
}