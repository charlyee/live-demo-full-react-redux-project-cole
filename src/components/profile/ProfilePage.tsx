import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../store';
import { TeachingAssistant } from '../../store/teachingAssistants/types';
//iETfaL/nmCJj0ay/sXQMP17aPSqHThHvQn5rmOuTu3+PIYurr0NvZek38SiiHPs+0y2QHYFLsVFiB3syiwLb0w==
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Student } from '../../store/students/types';

interface RouteParms {
    id: string;
}

export interface IProfilePageProps extends RouteComponentProps<RouteParms> {
    courseTaList: TeachingAssistant[];
    copiedCode?: Student[];
}

export class ProfilePage extends React.Component<IProfilePageProps> {
    public render() {
        //Now at this point we have the profile Id
        //from the URL.
        const { match: { params: { id } }, courseTaList } = this.props;

        //Now what we want to do is get the specific
        //TA profile with the id matching the id
        //from the url.
        //WARNING: THIS CAN BE UNDEFINED.
        //i4XbXnyejh1uMgL2W7MYlyBnlm6TSi6DGBMRHZTTLTeI8AkA5jWbGEvHv8xgqARFeQDN+9VZdLiuGcF5j4ECmw==
        let individualTA = courseTaList.filter(individualCourseTA => {
            return individualCourseTA.id === +id
        })[0];


        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Row>
                            <h1>{`${individualTA.firstName} ${individualTA.lastName}`}</h1>
                        </Grid.Row>
                        <Grid.Row>
                            <h3>{`Contact me :D ${individualTA.email}`}</h3>
                        </Grid.Row>
                    </Grid.Row>
                </Grid>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        courseTaList: state.teachingAssistants.teachingAssistants,
        copiedCode: state.students.students
    }
}

export default connect(
    mapStateToProps,
)(ProfilePage)