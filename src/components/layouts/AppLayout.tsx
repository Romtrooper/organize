import * as React from 'react';

import Header from '../templates/header/Header';

import './AppLayout.css'
interface IAppLayoutProps {
	children: React.ReactNode
}

export default class AppLayout extends React.Component<IAppLayoutProps> {

	render() {
		return (
			<main className='AppLayout'>
				<Header />
				{this.props.children}
			</main>
		);
	}
}

