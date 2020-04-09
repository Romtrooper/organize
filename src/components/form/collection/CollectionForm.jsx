import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Input } from 'semantic-ui-react';

export default class CollectionForm extends React.Component {
	state = {
		title: '',
	}

	onChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	onSubmit =() => {
		this.props.createCollection(this.state);
		this.setState({ title: '' });
	};

	render() {
		return (
			<Grid.Column width={8}>
				<Form>
					<Form.Field>
						<Input
							name='title'
							label='Title'
							labelPosition='left'
							placeholder='Name your task'
							onChange={this.onChange}
							value={this.state.title}
						/>
					</Form.Field>
					<Form.Field>
						<Button
							type='submit'
							onClick={this.onSubmit}
						>
								Submit
						</Button>
					</Form.Field>
				</Form>
			</Grid.Column>
		);
	}
}

CollectionForm.propTypes = {
	createCollection: PropTypes.func.isRequired,
};
