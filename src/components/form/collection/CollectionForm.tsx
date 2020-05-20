import * as React from 'react';
import { 
	Button,
	Form,
	Grid,
	Input
} from 'semantic-ui-react';

interface ICollectionFormProps {
	createCollection: (form: Object) => void
}

export default class CollectionForm extends React.Component<ICollectionFormProps> {
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
		this.props.createCollection(this.state.title);
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
						<Button type='submit' onClick={this.onSubmit}>
							Submit
						</Button>
					</Form.Field>
				</Form>
			</Grid.Column>
		);
	}
}
