import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import CollectionItemForm from '../form/item/CollectionItemFormContainer';

export default function Collection(props) {
	 return (
		<Grid className='Home-grid' >
		<Grid.Row streched>
			<p>Welcome to your {props.match.params.name} collection</p>
			<CollectionItemForm collectionId={props.match.params.name} />
		</Grid.Row>
	</Grid>
	 )
}
