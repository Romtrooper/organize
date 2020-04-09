import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Message, Card, Icon } from 'semantic-ui-react';
// import CollectionItem from './item/CollectionItem';

export default class Collection extends Component {
	renderTasks = () => this.props.collections.map(collection => (
		<Card>
			<Card.Content header={collection.title} />
			{/* <Card.Content description={description} /> */}
			<Card.Content extra>
				<Icon name='user' />
				4 Friends
			</Card.Content>
		</Card>
	));

	render() {
		if (Object.keys(this.props.collections).length === 0) {
			return (
				<Grid.Column width={8} >
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

Collection.propTypes = {
	collections: PropTypes.array.isRequired,
};
