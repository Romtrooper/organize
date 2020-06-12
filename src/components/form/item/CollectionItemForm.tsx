import * as React from 'react';
import {
	Button,
	Form,
	Grid,
	Input,
	Dropdown,
} from 'semantic-ui-react';


interface ICollectionItemFormProps {
	createCollectionItem: (id: string, item: Object) => void;
	collectionId: string;
}

export default class CollectionItemForm extends React.Component<ICollectionItemFormProps> {
	state = {
		title: '',
		description: '',
		url: '',
		category: '',
	}

	handleChange = event => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	handleDropdownChange = (event, data) => {
		this.setState({
			...this.state,
			category: data.value,
		});
	};

	handleSubmit =() => {
		const { createCollectionItem, collectionId } = this.props;

		createCollectionItem(collectionId, this.state);
		this.setState({
			title: '',
			description: '',
			url: '',
			category: '',
		});
	};

	render() {
		const {
			title,
			url,
			description,
		} = this.state;

		return (
			<Grid.Column width={8}>
				<Form>
					<Form.Field>
						<Input
							name='title'
							label='Title'
							labelPosition='left'
							placeholder='Name your task'
							onChange={this.handleChange}
							value={title}
						/>
					</Form.Field>
					<Form.Field>
						<Input
							name='description'
							label='Description'
							labelPosition='left'
							placeholder='Description of the task'
							onChange={this.handleChange}
							value={description}
						/>
					</Form.Field>
					<Form.Field>
						<Input
							name='url'
							label='Url'
							labelPosition='left'
							placeholder='Link a website'
							onChange={this.handleChange}
							value={url}
						/>
					</Form.Field>
					<Form.Field>
						<Dropdown
							name='category'
							placeholder='Select category'
							selection
							search
							floating
							labeled
							onChange={this.handleDropdownChange}
							options={[
								{ key: 'Todo', text: 'To do', value: 'To do' },
								{ key: 'Toread', text: 'To read', value: 'To read' },
								{ key: 'Ideas', text: 'Ideas', value: 'Ideas' },
							]}
						/>
					</Form.Field>
					<Form.Field>
						<Button type='submit' onClick={this.handleSubmit}>
							Submit
						</Button>
					</Form.Field>
				</Form>
			</Grid.Column>
		);
	}
}
