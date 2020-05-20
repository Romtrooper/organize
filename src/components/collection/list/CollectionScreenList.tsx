import * as React from 'react';
import { 
	Grid,
	Card,
	Icon,
	Button
} from 'semantic-ui-react';
import { ICollectionItem } from '../../../modules/collections/CollectionsInterface';

interface ICollectionScreenListProps {
	itemsList: Array<ICollectionItem>
	collectionId: string
}

export default class CollectionScreenList extends React.Component<
	ICollectionScreenListProps
> {

	renderItems = () => this.props.itemsList.map(item => (
		<Card>
			<Card.Content header={item.title} />
			<Card.Meta>{item.url}</Card.Meta>
			<Card.Description>
				{item.description}
			</Card.Description>
			<Card.Content extra>
				<div className='ui two buttons'>
					<Button basic color='green'>
						Approve
					</Button>
					<Button basic color='red'>
						Decline
					</Button>
				</div>
			</Card.Content>
			<Card.Content extra>
				<Icon name='tags' />
				{item.category}
			</Card.Content>
		</Card>
	));

	render() {
		if (this.props.itemsList.length === 0) {
			return (
				<Grid.Column width={8} >
					<p>Welcome to your {this.props.collectionId} collection</p>
				</Grid.Column>
			);
		}

		return (
			<Grid.Column width={8}>
				<Grid>
					<Grid.Row columns={1}>
						{this.renderItems()}
					</Grid.Row>
				</Grid>
			</Grid.Column>
		);
	}
}
