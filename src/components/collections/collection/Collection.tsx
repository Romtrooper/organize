import * as React from 'react';
import { 
	Grid,
	Message,
	Card,
	Icon,
	Button
} from 'semantic-ui-react';

interface ICollectionProps {
	collections: Array<any>
}

export default class Collection extends React.Component<ICollectionProps> {
	renderTasks = () => this.props.collections.map(collection => (
		<Card>
			<Card.Content header={collection} />
			<Card.Content extra>
				<Button content='See' positive fluid />
			</Card.Content>
			<Card.Content extra>
				<Icon name='book' />
				Read 2 of 7
			</Card.Content>
		</Card>
	));

	render() {
		if (this.props.collections.length === 0) {
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
