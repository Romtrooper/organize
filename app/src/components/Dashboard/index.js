import React, { Fragment } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import NewsFeed from '../feed';

const Dashboard = () => (
  <Fragment>
    
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
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
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' />
          <Card.Header>
            Molly Thomas
          </Card.Header>
          <Card.Meta>
            New User
          </Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>

    <Card>
      <Card.Content>
        <Card.Header>
          Recent Activity
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <NewsFeed />
      </Card.Content>
    </Card>

  </Fragment>
);

export default Dashboard;
