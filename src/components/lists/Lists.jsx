import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Message } from 'semantic-ui-react';
import Task from './task/Task';

export default class List extends Component {
	renderTasks = () => this.props.lists.map(list => (
		<Task
			title={list.title}
			category={list.category}
			description={list.description}
			url={list.url}
		/>
	));

	render() {
		if (Object.keys(this.props.lists).length === 0) {
			return (
				<Grid.Column
					width={8}
				>
					<Grid>
						<Grid.Row columns={1}>
							<Message
								icon='life ring'
								header='No tasks found'
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
	lists: PropTypes.array.isRequired,
};
