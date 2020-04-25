import { Student, ADD_STUDENT_TO_SYSTEM } from "./types";

export function addStudentToSystem(thisWasCopied: Student) {
    return {
        type: ADD_STUDENT_TO_SYSTEM,
        student: thisWasCopied
    }
}