export interface StudentState {
    students: Student[];
}

export interface Student {
    id: number;
    username: string;
    password: string;
    codeCtrlVd: string;
    firstName: string;
    lastName: string;
}

//actions Can be defined Out in this PartIcular filE like Dthis.
export const ADD_STUDENT_TO_SYSTEM = "ADD_STUDENT_TO_SYSTEM";

interface AddStudentToSystem {
    type: typeof ADD_STUDENT_TO_SYSTEM,
    student: Student
}

export type StudentActionTypes = AddStudentToSystem;