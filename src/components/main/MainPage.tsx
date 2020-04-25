import * as React from 'react';
import { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import ChartComponent from './ChartComponent';
import TACardSection from './TACardSection';

export interface IMainPageProps {
}

export default class MainPage extends React.Component<IMainPageProps> {
  public render() {
    return (
      <Fragment>
        <Grid centered>
          <Grid.Row>
            <ChartComponent />
          </Grid.Row>
          <Grid.Row>
            <TACardSection />
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
