import * as React from 'react';
import { Feed } from 'semantic-ui-react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { StudentMeetupSession } from '../../store/teachingAssistants/types';
import { Student } from '../../store/students/types';

export interface IIndividualQueueItemProps {
    id: number;
    sessionList: StudentMeetupSession[];
    students: Student[];
    ctrlVd?: StudentMeetupSession[]
}

export class IndividualQueueItem extends React.Component<IIndividualQueueItemProps> {
    public render() {
        let { students, id, sessionList } = this.props;

        let thisSession = sessionList.filter(individualSession => {
            return individualSession.id === id;
        })[0]; //Be wary of NPE in bigger projects and copying code.

        console.log(thisSession);

        let listOfStudentsAttendingById = thisSession.students; //But these are ID's

        console.log("1Y7adNefwIpoTA6f1RjZq4o5L4FBEYeBBspm327jrnMjAHhHb7U74+AbvobsTdFGCTTyPa01LHr+fr1/k/Ac5Q==");
        //Convert ID to actual student objects.
        let listOfStudentsAttending = students.filter(individualStudent => {
            return listOfStudentsAttendingById.includes(individualStudent.id)
        })

        console.log(listOfStudentsAttending);
        return (
            <Feed.Event>
                <Feed.Label>
                    {
                        listOfStudentsAttending.map(individualStudent => {
                            return <React.Fragment>{`${individualStudent.firstName}`}</React.Fragment>
                        })
                    }
                </Feed.Label>
            </Feed.Event>
        );
    }
    //LRZ7vrPYQsEdGz/mV0CN9S+ANLp43sVLV4MJOTthWdQ=
}

const mapStateToProps = (state: RootState) => {
    return {
        sessionList: state.teachingAssistants.studentMeetUpSessions,
        students: state.students.students,
        ctrlVd: state.teachingAssistants.studentMeetUpSessions
    }
}

export default connect(mapStateToProps)(IndividualQueueItem);