/*
 * Npm import
 */
import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';


const Task = () => (
  <Grid.Column>
    <Card>
      <Card.Content>
        <Card.Header>
            Steve Sanders
        </Card.Header>
        <Card.Meta>
            Friends of Elliot
        </Card.Meta>
        <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Grid.Column>
);


/*
 * Export default
 */
export default Task;
