import React from 'react';
import { Grid } from 'semantic-ui-react';

import Form from '../../form/FormContainer';
import Lists from '../../lists/ListsContainer';

import './Home.css';

const Home = () => (
	<Grid className='Home-grid' >
		<Grid.Row streched>
			<Form />
			<Lists />
		</Grid.Row>
	</Grid>
);

export default Home;
