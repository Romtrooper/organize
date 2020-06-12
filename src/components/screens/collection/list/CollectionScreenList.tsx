import * as React from 'react';
import {
	Grid,
	Card,
	Icon,
	Button
} from 'semantic-ui-react';
import { ICollectionItem } from '../../../../modules/collections/CollectionsInterface';

import './CollectionScreenList.css'
interface ICollectionScreenListProps {
	itemsList: Array<ICollectionItem>;
	collectionId: string;
}

export default class CollectionScreenList extends React.Component<ICollectionScreenListProps> {

	renderItems = () => {
		const { itemsList } = this.props;

		return itemsList.map(item => (
			<div className='CollectionList-card' key={item.url}>
				<Card >
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
			</div>
		));
	}

	render() {
		const { itemsList, collectionId } = this.props;

		if (itemsList.length === 0) {
			return (
				<Grid.Column width={8} >
					<p>Welcome to your {collectionId} collection</p>
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
