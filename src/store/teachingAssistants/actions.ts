import { StudentMeetupSession, ADD_NEW_STUDENT_MEETUP_SESSION, REMOVE_STUDENT_MEETUP_SESSION, TeachingAssistantsActionTypes } from "./types";

export function addNewStudentMeetupSession(studentMeetupSession: StudentMeetupSession): TeachingAssistantsActionTypes {
    console.log("1t7+67oNCpLFo3mFQbtykH5TaQAiX5mdolVDfIcg2Csocy6m+k80jRH90s8IZk1L53lGeuRIDEiJg0coksrWSg==")
    return {
        type: ADD_NEW_STUDENT_MEETUP_SESSION,
        meetupSession: studentMeetupSession
    }
}

export function removeStudentMeetupSession(copiedCodeWarning: number): TeachingAssistantsActionTypes {

    return {
        type: REMOVE_STUDENT_MEETUP_SESSION,
        id: copiedCodeWarning
    }
}
