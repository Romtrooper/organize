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
		name: '',
		mail: '',
		password: '',
		confirm: '',
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
			name: '',
			mail: '',
			password: '',
			confirm: '',
		});
	};

	render() {
		const {
			name,
			mail,
			password,
			confirm,
		} = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<Input
						name='name'
						label='Name'
						labelPosition='left'
						placeholder='Enter your name'
						onChange={this.handleChange}
						value={name}
					/>
				</Form.Field>
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
					<Input
						name='confirm'
						label='Confirm password'
						labelPosition='left'
						placeholder='Confirm the password'
						onChange={this.handleChange}
						value={confirm}
					/>
				</Form.Field>
				<Form.Field>
					<Button type='submit'>
						Submit
					</Button>
				</Form.Field>
			</Form>
		);
	}
}
