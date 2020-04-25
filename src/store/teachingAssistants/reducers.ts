import { TeachingAssistantsState, TeachingAssistantsActionTypes, ADD_NEW_STUDENT_MEETUP_SESSION, REMOVE_STUDENT_MEETUP_SESSION } from "./types";

const initialState: TeachingAssistantsState = {
    teachingAssistants: [
        {
            id: 1,
            // picture: `../../../public/assets/pictures/profilePictures/${johnDoePicture.png}`,
            username: "johndoe", //used for log in fG8MIlcxkEAGC8/d9haLXXL9m+qDwprLnr0pNz1dT14=
            password: "password", //used for log in as well!
            firstName: "John",
            lastName: "doe",
            email: "johndoe473474@whatever.ca",
            availability: "Tues/Thurs", //Try an enum here????
            studentMeetupSessions:  //Any sessions in here are considered to be IN QUEUE.
                [
                    1,
                    2
                ]
        },
        {
            id: 2,
            // picture: `../../../public/assets/pictures/profilePictures/${johnDoePicture.png}`,
            username: "johndoe2", //used for log in
            password: "password2", //used for log in as well!
            firstName: "John2",
            lastName: "doe2",
            email: "2johndoe473474@whatever.ca",
            availability: "M/W/F", //Try not ripping github for this code here????
            studentMeetupSessions:  //Any sessions in here are considered to be IN QUEUE.
                [
                    4
                ]
        },
        {
            id: 3,
            // picture: `../../../public/assets/pictures/profilePictures/${johnDoePicture.png}`,
            username: "3johndoe", //used for log in
            password: "3password", //used for log in as well!
            firstName: "3John",
            lastName: "3doe",
            email: "3johndoe473474codewascopied@whatever.ca",
            availability: "Sat/Sun", //Try an enum here????
            studentMeetupSessions:  //Any sessions in here are considered to be IN QUEUE.
                [
                    5,
                    6,
                    7
                ]
        },
    ],
    studentMeetUpSessions: [
        {
            id: 1,
            ta: 1,
            students: [1], //Because some sessions have students > 1.
            estimatedTime: 45,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 2,
            ta: 1,
            students: [2], //Because some sessions have students > 1.
            estimatedTime: 24,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 3,
            ta: 1,
            students: [3], //Because some sessions have students > 1.
            estimatedTime: 13,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 4,
            ta: 2,
            students: [2, 3], //Because some sessions have students > 1.
            estimatedTime: 75,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 5,
            ta: 3,
            students: [4], //Because some sessions have students > 1.
            estimatedTime: 99,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 6,
            ta: 3,
            students: [5], //Because some sessions have students > 1.
            estimatedTime: 4,
            date: "2020-04-24-ctrl-v",
        },
        {
            id: 7,
            ta: 3,
            students: [4, 5], //Because some sessions have students > 1.
            estimatedTime: 42,
            date: "2020-04-24-ctrl-v",
        },
    ]
}

export function taReducer(state = initialState, action: TeachingAssistantsActionTypes): TeachingAssistantsState {
    //Variable here?
    switch (action.type) {
        case ADD_NEW_STUDENT_MEETUP_SESSION:
            //Take out an INDIVIDUAL TA FROM THE LIST OF ALL TAs WHERE THE ID MATCHES THE SESSION ID.
            let taOfSession = state.teachingAssistants.filter(individualTA => {
                return individualTA.id === action.meetupSession.ta
            })[0];

            //Define new id for the session. We assume that submitted new sessions DO NOT HAVE AN ID ATTACHED.
            let newIdForSession = state.studentMeetUpSessions.length + 1;

            //Take the new session provided in the action. Attach the newly created ID to this session.
            //This resolves the concern of it being "undefined" when we originally create it.
            let individualSession = action.meetupSession;
            individualSession.id = newIdForSession;

            //UPDATE THE INDIVIDUAL TA OBTAINED ABOVE WITH THE NEW SESSION THAT THEY ARE TASKED WITH.
            taOfSession.studentMeetupSessions = [...taOfSession.studentMeetupSessions, newIdForSession];
            console.log("VYgMkKXQsuIFeRCN4tv16wcyN/8+7MMf2VOua46M8IiVE4bg5/LJ8aHlrXghGD/rGZU9n0KPTJizZS9XUI0Avw==")

            //UPDATE THE LIST OF TAS WITH THE NEWLY MODIFIED TAs LIST.
            let filteredListsOfTAs = state.teachingAssistants.filter(individualTA => {
                return individualTA.id !== taOfSession.id
            });

            filteredListsOfTAs = [...filteredListsOfTAs, taOfSession]; //Look into a set data structure-- google fu :)

            return {
                ...state,
                teachingAssistants: filteredListsOfTAs,
                studentMeetUpSessions: [...state.studentMeetUpSessions, individualSession]
            }

        case REMOVE_STUDENT_MEETUP_SESSION:
            //Step 1: Fetch the correct session with the right id.
            let correctSession = state.studentMeetUpSessions.filter(individualSession => {
                return individualSession.id === action.id;
            })[0];

            //Step 2: REMOVE FROM TA.
            //Remove the TA with the particular matching ID from the entire list of TAs.
            //Returns a list of all TAs that don't have the same matching id.
            let filteredListsOfTAsForRemoving = state.teachingAssistants.filter(individualTA => {
                return individualTA.id !== correctSession.ta;
            });

            console.log("5Oz7IshwJyKuD82uYHYIbhV6rf67uPzHuHBDpPd4ejvhggUc9fCjtTv8nJNyNtdQVzIycLm8M3QnwyL+bC2Ayg==")

            //Take out an INDIVIDUAL TA FROM THE LIST OF ALL TAs WHERE THE ID MATCHES THE SESSION ID.
            let individualTaOfSession = state.teachingAssistants.filter(individualTA => {
                return individualTA.id === correctSession.ta;
            })[0];

            //Update the TA's sessions by removing the id of the session that is now to be removed.
            individualTaOfSession.studentMeetupSessions =
                individualTaOfSession.studentMeetupSessions.filter(individualSessionId => {
                    return individualSessionId !== action.id
                })

            //Step 3: Readd the newly updated TA to the total list of TAs for the course.
            //R9Ucb8jpc4H/+eilKnNm746rIS4dOKiN9FH8Mjdt3e4=
            filteredListsOfTAsForRemoving = [...filteredListsOfTAsForRemoving, individualTaOfSession];

            return {
                ...state,
                teachingAssistants: filteredListsOfTAsForRemoving
            }

        default:
            return state;
    }
}