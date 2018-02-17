/*
 * Npm import
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Task from '../Task';


const List = () => (
  <Grid.Column>
    <Grid>
      <Grid.Row columns={2}>
        <Task />
        <Task />
        <Task />
        <Task />
      </Grid.Row>
    </Grid>
  </Grid.Column>
);


/*
 * Export default
 */
export default List;
