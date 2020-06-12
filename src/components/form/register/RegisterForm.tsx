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

	onChange = event => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = () => {
		this.props.createUserAccount(this.state.mail, this.state.password);
		this.setState({
			name: '',
			mail: '',
			password: '',
			confirm: '',
		});
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<Input
						name='name'
						label='Name'
						labelPosition='left'
						placeholder='Enter your name'
						onChange={this.onChange}
						value={this.state.name}
					/>
				</Form.Field>
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
					<Input
						name='confirm'
						label='Confirm password'
						labelPosition='left'
						placeholder='Confirm the password'
						onChange={this.onChange}
						value={this.state.confirm}
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
