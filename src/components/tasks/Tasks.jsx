import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Message } from 'semantic-ui-react';
import Task from './task/Task';

export default class List extends Component {
  renderTasks = () => this.props.tasks.map(task => (
    <Task
      title={task.title}
      category={task.category}
      description={task.description}
      url={task.url}
    />
  ));

  render() {
    const { tasks } = this.props;

    if (Object.keys(tasks).length === 0) {
      return (
        <Grid.Column
          width={8}
        >
          <Grid>
            <Grid.Row columns={1}>
              <Message
                icon='life ring'
                header="No tasks found"
                content='Create a first task to see it appear!'
              />
            </Grid.Row>
          </Grid>
        </Grid.Column>
      );
    }
    return (
      <Grid.Column width={8}>
        <Grid>
          <Grid.Row columns={1}>
            {this.renderTasks()}
          </Grid.Row>
        </Grid>
      </Grid.Column>
    );
  }
}

List.propTypes = {
  tasks: PropTypes.array.isRequired,
};
