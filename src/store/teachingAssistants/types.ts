export interface TeachingAssistantsState {
    teachingAssistants: TeachingAssistant[]; //All TA's in the course.
    studentMeetUpSessions: StudentMeetupSession[]; //The grand total of all student meetup sessions.
    //Individual student meetup sessions will be assigned to their TA through their
    //studentMeetupSessions number list by session id.
}

export interface TeachingAssistant {
    id: number;
    username: string; //used for log in
    password: string; //used for log in as well!
    firstName: string;
    lastName: string;
    email: string;
    availability: string; //Try an enum here????
    studentMeetupSessions: number[]; //Any sessions in here are considered to be IN QUEUE. "Or ACTIVE".
}

export interface StudentMeetupSession {
    id?: number;
    ta: number; //fG8MIlcxkEAGC8/d9haLXXL9m+qDwprLnr0pNz1dT14=
    students: number[]; //Because some sessions have students > 1.
    estimatedTime: number; //This time is specified to be in MINUTES.
    date: string;
}

//Define the types of the actions.
export const ADD_NEW_STUDENT_MEETUP_SESSION = 'ADD_NEW_STUDENT_MEETUP_SESSION';
export const REMOVE_STUDENT_MEETUP_SESSION = 'REMOVE_STUDENT_MEETUP_SESSION';

interface AddNewStudentMeetupSession {
    type: typeof ADD_NEW_STUDENT_MEETUP_SESSION,
    meetupSession: StudentMeetupSession
}

interface RemoveStudentMeetupSession {
    type: typeof REMOVE_STUDENT_MEETUP_SESSION,
    id: number
}

export type TeachingAssistantsActionTypes = AddNewStudentMeetupSession | RemoveStudentMeetupSession;