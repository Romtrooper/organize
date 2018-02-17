import React from 'react';
import { Grid } from 'semantic-ui-react';

import FormArea from '../Form';
import List from '../List';

const App = () => (
  <main>
    <Grid>
      <Grid.Row columns={2}>
        <FormArea />
        <List />
      </Grid.Row>
    </Grid>
  </main>


);


/*
 * Export default
 */
export default App;
