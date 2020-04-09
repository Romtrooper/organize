import React, { Component, Fragment } from 'react';

import Routes from './Routes';
import SideMenu from './components/navigation/sidemenu/SideMenu';
import Header from './components/navigation/header/Header';

// import { firebaseConnect } from '../../modules/account/accountClient';

import './App.css';

class App extends Component {
	state = { visible: true }

	// componentWillMount() {
	// 	firebaseConnect();
	// }

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		const { visible } = this.state;
		return (
			<Fragment>
				<Header toggleVisibility={this.toggleVisibility} />
				<main>
					<SideMenu visible={visible} />
					<div className='App-content'>
						<Routes />
					</div>
				</main>
			</Fragment>
		);
	}
}

export default App;
