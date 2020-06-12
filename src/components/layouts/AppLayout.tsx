import * as React from 'react';

import Header from '../templates/header/Header';

import './AppLayout.css'
interface IAppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
	return (
		<main className='AppLayout'>
			<Header />
			{children}
		</main>
	);
}

