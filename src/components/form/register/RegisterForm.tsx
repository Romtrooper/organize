import * as React from 'react';
import {
	Button,
	Form,
	Input
} from 'semantic-ui-react';

interface IRegisterProps {
	createUserAccount: (mail: string, password: string) => void;
	error: boolean;
	processing: boolean;
}

export default class Register extends React.Component<IRegisterProps> {
	state = {
		mail: '',
		password: '',
	}

	handleChange = event => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = () => {
		const { mail, password } = this.state;
		const { createUserAccount } = this.props;

		createUserAccount(mail, password);
		this.setState({
			mail: '',
			password: '',
		});
	};

	render() {
		const { mail, password } = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<Input
						name='mail'
						label='Mail'
						labelPosition='left'
						placeholder='Enter your mail'
						onChange={this.handleChange}
						value={mail}
					/>
				</Form.Field>
				<Form.Field>
					<Input
						name='password'
						label='Password'
						labelPosition='left'
						placeholder='Choose a password'
						onChange={this.handleChange}
						value={password}
					/>
				</Form.Field>
				<Form.Field>
					<Button type='submit'>
						Sign Up
					</Button>
				</Form.Field>
			</Form>
		);
	}
}
