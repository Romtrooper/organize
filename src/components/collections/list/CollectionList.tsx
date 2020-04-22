import * as React from 'react';
import { 
	Grid,
	Message,
	Card,
	Icon,
	Button
} from 'semantic-ui-react';

import { Link } from "react-router-dom";

interface ICollectionListProps {
	collections: Array<any>
}

export default class CollectionList extends React.Component<
	ICollectionListProps
> {

	renderCollections = () => this.props.collections.map(name => (
		<Card>
			<Card.Content header={name} />
			<Card.Content extra>
				<Link to={`/collection/${name}`}>
					<Button content='See' positive fluid />
				</Link>
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
								header='No collections found'
								content='Create a first collection to see it appear!'
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
						{this.renderCollections()}
					</Grid.Row>
				</Grid>
			</Grid.Column>
		);
	}
}
