import * as React from 'react';
import TACard from './TACard';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { TeachingAssistant } from '../../store/teachingAssistants/types';

export interface ITACardSectionProps {
    taList: TeachingAssistant[];
}

export class TACardSection extends React.Component<ITACardSectionProps> {
    public render() {
        let { taList } = this.props;
        console.log("??????????????? " + taList)
        console.log("TA LIST? " + taList)
        console.log("iETfaL/nmCJj0ay/sXQMP17aPSqHThHvQn5rmOuTu3+PIYurr0NvZek38SiiHPs+0y2QHYFLsVFiB3syiwLb0w==")

        return (
            <React.Fragment>
                <Grid>
                    {
                        taList.map(individualTA => {
                            return (
                                <Grid.Column width={5}>
                                    <TACard id={individualTA.id} />
                                </Grid.Column>
                            )
                        })
                    }
                    {/* D.R.Y. = DON'T REPEAT YOURSELF.
                    
                    <Grid.Column width={5}>
                        <TACard />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <TACard />
                        PwU9YzYgYJOnhxXWRgiskJ7AkvB7SHVb+dhL1shR65E=
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <TACard />
                    </Grid.Column> */}
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        taList: state.teachingAssistants.teachingAssistants
    }
}

export default connect(mapStateToProps)(TACardSection);
