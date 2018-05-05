import React from 'react';
import { Card, Grid, Icon } from 'semantic-ui-react';

const Task = () => (
  <Grid.Column>
    <Card fluid color="grey" className="Task">
      <Card.Content>
        <Card.Header>
            Task Title
        </Card.Header>
        <Card.Meta>
            Category
        </Card.Meta>
        <Card.Description>
            Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="empty star" size="large" />
        <Icon name="bell outline" size="large" />
        <Icon name="checkmark" size="large" />
        <Icon name="trash outline" size="large" />
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default Task;
