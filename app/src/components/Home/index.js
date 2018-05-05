import React from 'react';
import { Grid } from 'semantic-ui-react';

// import FormArea from '../Form';
import FormContainer from '../../containers/FormContainer';
import List from '../List';

const Home = () => (
  <Grid>
    <Grid.Row columns={2}>
      <FormContainer />
      <List />
    </Grid.Row>
  </Grid>
);

export default Home;
