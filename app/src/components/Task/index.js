import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Icon } from 'semantic-ui-react';

export default class Task extends React.Component {
  render() {
    return (
      <Grid.Column>
        <Card fluid color="grey" className="Task">
          <Card.Content>
            <Card.Header>
              {this.props.title}
            </Card.Header>
            <Card.Meta>
              {this.props.category}
            </Card.Meta>
            <Card.Description>
              {this.props.description}
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
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};
