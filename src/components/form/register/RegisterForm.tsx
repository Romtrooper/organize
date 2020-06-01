import * as React from 'react';
import {
	Button,
	Form,
	Input
} from 'semantic-ui-react';

interface IRegisterProps {
	createUserAccount: (mail: string, password: string) => void
	error: boolean
	processing: boolean
}

export default class Register extends React.Component<IRegisterProps> {
	state = {
		mail: '',
		password: '',
	}

	onChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = () => {
		this.props.createUserAccount(this.state.mail, this.state.password);
		this.setState({
			mail: '',
			password: '',
		});
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<Input
						name='mail'
						label='Mail'
						labelPosition='left'
						placeholder='Enter your mail'
						onChange={this.onChange}
						value={this.state.mail}
					/>
				</Form.Field>
				<Form.Field>
					<Input
						name='password'
						label='Password'
						labelPosition='left'
						placeholder='Choose a password'
						onChange={this.onChange}
						value={this.state.password}
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
