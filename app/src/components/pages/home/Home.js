import React from 'react';
import { Grid } from 'semantic-ui-react';

import FormContainer from '../../form/FormContainer';
import TasksContainer from '../../tasks/TasksContainer';

const Home = () => (
  <Grid className='Home-grid' >
    <Grid.Row streched>
      <FormContainer />
      <TasksContainer />
    </Grid.Row>
  </Grid>
);

export default Home;
