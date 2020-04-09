import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SideMenu from '../templates/sidemenu/SideMenu';
import Header from '../templates/header/Header';

import './AppLayout.css';

export default class AppLayout extends React.Component {
	state = {
		visible: true,
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		const { visible } = this.state;
		return (
			<Fragment>
				<Header toggleVisibility={this.toggleVisibility} />
				<main className='AppLayout'>
					<SideMenu visible={visible} />
					<div className='AppLayout-content'>
						{this.props.children}
					</div>
				</main>
			</Fragment>
		);
	}
}


AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
