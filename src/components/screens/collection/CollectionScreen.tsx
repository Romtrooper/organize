import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import CollectionItemForm from '../../form/item/CollectionItemFormContainer';
import CollectionScreenListContainer from './list/CollectionScreenListContainer';

export default function Collection(props) {
	 return (
		<Grid>
			<Grid.Row streched>
				<CollectionItemForm collectionId={props.match.params.name} />
				<CollectionScreenListContainer collectionId={props.match.params.name} />
			</Grid.Row>
		</Grid>
	 )
}
