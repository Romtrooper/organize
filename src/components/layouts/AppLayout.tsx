import * as React from 'react';

import SideMenu from '../templates/sidemenu/SideMenu';
import Header from '../templates/header/Header';

import './AppLayout.css';

interface IAppLayoutProps {
	children: React.ReactNode
}

export default class AppLayout extends React.Component<IAppLayoutProps> {
	state = {
		visible: true,
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		const { visible } = this.state;
		return (
			<React.Fragment>
				<Header toggleVisibility={this.toggleVisibility} />
				<main className='AppLayout'>
					<SideMenu visible={visible} />
					<div className='AppLayout-content'>
						{this.props.children}
					</div>
				</main>
			</React.Fragment>
		);
	}
}

