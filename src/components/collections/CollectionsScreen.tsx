import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import CollectionForm from '../form/collection/CollectionFormContainer';
import CollectionList from './list/CollectionListContainer';

import './CollectionsScreen.css';

const Home = () => (
	<Grid className='Home-grid' >
		<Grid.Row streched>
			<CollectionForm />
			<CollectionList />
		</Grid.Row>
	</Grid>
);

export default Home;
