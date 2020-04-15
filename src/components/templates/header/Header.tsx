import * as React from 'react';
import { Button, Search } from 'semantic-ui-react';

import './Header.css';

interface IHeaderProps {
	toggleVisibility: () => void
}

const Header = (props: IHeaderProps) => (
	<header className='Header'>
		<Button
			className='Header-button'
			primary
			onClick={props.toggleVisibility}
			content='Menu'
		/>
		<Search
			className='Header-search'
		/>
	</header>
);

export default Header;
