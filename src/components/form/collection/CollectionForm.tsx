import * as React from 'react';
import {
	Button,
	Form,
	Grid,
	Input
} from 'semantic-ui-react';

interface ICollectionFormProps {
	createCollection: (form: string) => void;
}

export default class CollectionForm extends React.Component<ICollectionFormProps> {
	state = {
		title: '',
	}

	handleChange = event => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	handleSumit = () => {
		const { title } = this.state;
		const { createCollection } = this.props;

		createCollection(title);
		this.setState({ title: '' });
	};

	render() {
		const { title } = this.state;

		return (
			<Grid.Column width={8}>
				<Form>
					<Form.Field>
						<Input
							name='title'
							label='Title'
							labelPosition='left'
							placeholder='Name your collection'
							onChange={this.handleChange}
							value={title}
						/>
					</Form.Field>
					<Form.Field>
						<Button type='submit' onClick={this.handleSumit}>
							Submit
						</Button>
					</Form.Field>
				</Form>
			</Grid.Column>
		);
	}
}
