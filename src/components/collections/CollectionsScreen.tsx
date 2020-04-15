import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import CollectionForm from '../form/collection/CollectionFormContainer';
import Collection from './collection/CollectionContainer';

import './CollectionsScreen.css';

const Home = () => (
	<Grid className='Home-grid' >
		<Grid.Row streched>
			<CollectionForm />
			<Collection />
		</Grid.Row>
	</Grid>
);

export default Home;
