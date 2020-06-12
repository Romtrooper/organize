import * as React from 'react';
import { useState } from 'react';

import {
	Button,
	Message,
	Form,
	Input,
} from 'semantic-ui-react'

interface ILoginFormProps {
	onSubmit: (name: string, password: string) => void;
	error: boolean;
	processing: boolean;
}

export default function LoginForm({ onSubmit, error, processing }: ILoginFormProps) {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Form 
			loading={processing}
			success={false}
			error={error}
			onSubmit={() => onSubmit(username, password)}
		>

			<Form.Field>
				<Input
					name='username'
					label='Username'
					labelPosition='left'
					placeholder='Please input your username'
					onChange={evt => setUserName(evt.target.value)}
					value={username}
				/>
			</Form.Field>
			<Form.Field>
				<Input
					name='password'
					label='Password'
					labelPosition='left'
					placeholder='Please input your password'
					onChange={evt => setPassword(evt.target.value)}
					value={password}
				/>
			</Form.Field>

			<Form.Field>
				<Button type='submit'>
					Submit
				</Button>
			</Form.Field>
			<Message
				error
				header='Action Forbidden'
				content='You can only sign up for an account once with a given e-mail address.'
			/>
			<Message
				success
				header='Success'
				content='Your are logged in.'
			/>
		</Form>
	);
}
