import * as React from 'react';
import { Card, Feed, Grid } from 'semantic-ui-react';
import { RootState } from '../../store';
//gqX2urb6CMxd1Pwg5eDQZDNMWgbwVEy2zbMwrBAFGog=
import { connect } from 'react-redux';
import { TeachingAssistant, StudentMeetupSession } from '../../store/teachingAssistants/types';
import { Student } from '../../store/students/types';
import IndividualQueueItem from './IndividualQueueItem';

export interface ITACardProps {
    taList: TeachingAssistant[];
    students: Student[];
    sessions: StudentMeetupSession[];
    id: number;
}

export class TACard extends React.Component<ITACardProps> {
    public render() {
        let { id, taList, sessions } = this.props;

        //id? 
        console.log("here is the id: " + id)

        //Get the particular TA from the redux store with the ID matching
        //this ID.
        let individualTA = taList.filter(individualTA => {
            console.log("in loop?" + individualTA.id) //1,2,3

            return individualTA.id === id
        })[0];

        console.log("individual ta?" + individualTA);



        //Add up all of the sessions to get the ETA.
        let sessionsByTA = sessions.filter(individualSession => {
            console.log("session?" + individualSession);
            console.log("individual ta id?" + individualTA)
            return individualSession.ta === individualTA.id
        });

        let totalCountOfETA = 0;

        sessionsByTA.forEach(individualSession => {
            totalCountOfETA += individualSession.estimatedTime
        });
        console.log("rSzoZGJYmgkv3ScTbAYaxAomG0IK6SNFEsid+q2c2qY=");
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{`${individualTA.firstName} ${individualTA.lastName}`}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid centered>
                        <Grid.Row>
                            {`ETA: ${totalCountOfETA}`}
                        </Grid.Row>
                        <Grid.Row>
                            {`TA Availability Days: ${individualTA.availability}`}
                        </Grid.Row>
                    </Grid>
                    <h3>Students In Queue</h3>
                    <Feed>
                        {
                            individualTA.studentMeetupSessions.map(individualSessionId => {
                                return <IndividualQueueItem id={id} />
                            })
                        }
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        taList: state.teachingAssistants.teachingAssistants,
        students: state.students.students,
        sessions: state.teachingAssistants.studentMeetUpSessions
    }
}

export default connect(mapStateToProps)(TACard);
