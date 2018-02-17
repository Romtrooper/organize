/*
 * Npm import
 */
import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

const FormArea = () => (
  <Grid.Column>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </Grid.Column>
);


/*
 * Export default
 */
export default FormArea;
