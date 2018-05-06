import React from 'react';
import { Grid } from 'semantic-ui-react';

import FormContainer from '../../containers/FormContainer';
import TasksContainer from '../../containers/TasksContainer';

const Home = () => (
  <Grid columns={2}>
    {/* <Grid.Row> */}
    <FormContainer />
    <TasksContainer />
    {/* </Grid.Row> */}
  </Grid>
);

export default Home;
