import * as React from 'react';
import {
	Grid,
	Message,
	Card,
	Icon,
	Button
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import './CollectionList.css'
interface ICollectionListProps {
	collections: Array<any>;
	empty: boolean;
}

export default class CollectionList extends React.Component<ICollectionListProps> {

	renderCollections = () => {
		const { collections } = this.props;

		return collections.map(name => (
			<div className='CollectionList-card' key={name}>
				<Card>
					<Card.Content header={name} />
					<Card.Content extra>
						<Link to={`/collection/${name}`}>
							<Button
								content='See'
								positive
								fluid
							/>
						</Link>
					</Card.Content>
					<Card.Content extra>
						<Icon name='book' />
						Read 2 of 7
					</Card.Content>
				</Card>
			</div>
		));
	}

	renderEmpty(){
		return (
			<Message
				icon='life ring'
				header='No collections found'
				content='Create a first collection to see it appear!'
			/>
		)
	}

	render() {
		const { empty } = this.props;

		return (
			<Grid.Column width={8}>
				<Grid>
					<Grid.Row columns={1}>
						{empty ? this.renderEmpty() : this.renderCollections()}
					</Grid.Row>
				</Grid>
			</Grid.Column>
		);
	}
}
