import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

import LoginForm from '../../form/login/LoginForm';

interface ILoginScreenProps {
	connected: boolean
	error: boolean
	onSubmit(): void
	history: any
}

export default class LoginScreen extends React.Component<ILoginScreenProps> {

	componentDidUpdate(prevProps) {
		if (!prevProps.connected && this.props.connected) {
			return this.props.history.push('/');
		}
	}

	render() {

		if (this.props.connected) {
			return (
				<Link to='/'>
					<Button>
						Explore
					</Button>
				</Link>
			)
		}

		return <LoginForm error={this.props.error} onSubmit={this.props.onSubmit} />;
	}
}
