import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'

import LoginForm from '../../form/login/LoginForm';
import RegisterForm from '../../form/register/RegisterForm';

interface IAccountScreenProps {
	createUserAccount: (mail: string, password: string) => void;
	onSubmit(): void;
	history: any;
	connected: boolean;
	error: boolean;
	processing: boolean;
}

export default class AccountScreen extends React.Component<IAccountScreenProps> {

	// componentDidUpdate(prevProps) {
	// 	if (!prevProps.connected && this.props.connected) {
	// 		return this.props.history.push('/');
	// 	}
	// }

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

		return (
			<Segment placeholder>
				<Grid columns={2} relaxed='very' stackable>
					<Grid.Column>
						<LoginForm
							error={this.props.error}
							processing={this.props.processing}
							onSubmit={this.props.onSubmit}
						/>
					</Grid.Column>

					<Grid.Column>
						<RegisterForm
							error={this.props.error}
							createUserAccount={this.props.createUserAccount}
							processing={this.props.processing}
						/>
					</Grid.Column>
				</Grid>

				<Divider vertical>Or</Divider>
			</Segment>
		)
	}

}
