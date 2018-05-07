import React from 'react';
import { Grid } from 'semantic-ui-react';

import FormContainer from '../../containers/FormContainer';
import TasksContainer from '../../containers/TasksContainer';

const Home = () => (
  <Grid className='Home-grid' >
    <Grid.Row streched>
      <FormContainer />
      <TasksContainer />
    </Grid.Row>
  </Grid>
);

export default Home;
