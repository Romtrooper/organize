import React from 'react';
import PropTypes from 'prop-types';
import { Button, Search } from 'semantic-ui-react';

import './Header.css';

const Header = ({ toggleVisibility }) => (
	<header className='Header'>
		<Button
			className='Header-button'
			primary
			onClick={toggleVisibility}
			content='Menu'
		/>
		<Search
			className='Header-search'
		/>
	</header>
);

Header.propTypes = {
	toggleVisibility: PropTypes.func.isRequired,
};

export default Header;
