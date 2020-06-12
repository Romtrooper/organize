import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import CollectionItemForm from '../../form/item/CollectionItemFormContainer';
import CollectionScreenListContainer from './list/CollectionScreenListContainer';

interface ICollectionProps {
	match: {
		params: {
			name: string;
		};
	};
}

export default function Collection({ match }: ICollectionProps) {
	return (
		<Grid>
			<Grid.Row streched>
				<CollectionItemForm collectionId={match.params.name} />
				<CollectionScreenListContainer collectionId={match.params.name} />
			</Grid.Row>
		</Grid>
	)
}
