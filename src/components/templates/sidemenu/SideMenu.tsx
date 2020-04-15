import * as React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './SideMenu.css';

interface ISideMenuProps {
	visible: boolean
}

const SideMenu = (props: ISideMenuProps) => (
	<div className='SideMenu'>
		<Sidebar.Pushable>
			<Sidebar
				as={Menu}
				animation='push'
				width='thin'
				direction='left'
				visible={props.visible}
				icon='labeled'
				vertical
				inverted
			>
				<Link to='/'>
					<Menu.Item name='collections'>
						<Icon name='list' />
						Collections
					</Menu.Item>
				</Link>
				<Link to='/account'>
					<Menu.Item name='account'>
						<Icon name='user outline' />
						Account
					</Menu.Item>
				</Link>
			</Sidebar>
		</Sidebar.Pushable>
	</div>
);


export default SideMenu;
