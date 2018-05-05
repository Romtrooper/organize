import React from 'react';
import { Button, Form, Grid, Input, Dropdown } from 'semantic-ui-react';

export default class FormArea extends React.Component {
  state = {
    title: '',
    description: '',
    url: '',
    category: '',
  }

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  onDropdownChange = (event, data) => {
    this.setState({
      ...this.state,
      category: data.value,
    });
  }

  render() {
    return (
      <Grid.Column>
        <Form>
          <Form.Field>
            <Input
              name="title"
              label="Title"
              labelPosition="left"
              placeholder="Name your task"
              onChange={this.onChange}
              value={this.state.title}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="description"
              label="Description"
              labelPosition="left"
              placeholder="Description of the task"
              onChange={this.onChange}
              value={this.state.description}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="url"
              label="Url"
              labelPosition="left"
              placeholder="Link a website"
              onChange={this.onChange}
              value={this.state.url}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              name="category"
              placeholder="Select category"
              selection
              search
              floating
              labeled
              onChange={this.onDropdownChange}
              options={[
                { key: 'Todo', text: 'To do', value: 'To do' },
                { key: 'Toread', text: 'To read', value: 'To read' },
                { key: 'Ideas', text: 'Ideas', value: 'Ideas' },
                ]}
            />
          </Form.Field>
          <Form.Field>
            <Button
              type="submit"
              onClick={() => this.props.saveTask(this.state)}
            >
                Submit
            </Button>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}
