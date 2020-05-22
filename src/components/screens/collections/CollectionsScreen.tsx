import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import CollectionForm from '../../form/collection/CollectionFormContainer';
import CollectionList from './list/CollectionListContainer';

const CollectionsScreen = () => (
	<Grid>
		<Grid.Row streched>
			<CollectionForm />
			<CollectionList />
		</Grid.Row>
	</Grid>
);

export default CollectionsScreen;
