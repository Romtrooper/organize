import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import Task from '../Task';

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
        <Grid.Column>
          <Grid>
            <Grid.Row columns={1}>
              <div>No datas</div>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      );
    }
    return (
      <Grid.Column>
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
