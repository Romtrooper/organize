import * as React from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
	<header className='Header'>
		<Menu pointing secondary>
			<Link to='/'>
				<Menu.Item name='collections'>
					Collections
				</Menu.Item>
			</Link>
			<Link to='/account'>
				<Menu.Item name='account'>
					Account
				</Menu.Item>
			</Link>
		</Menu>
		<Search className='Header-search' />
	</header>
);

export default Header;
