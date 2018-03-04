import React from 'react';
import { Button, Form, Grid, Input, Dropdown } from 'semantic-ui-react';

export default class FormArea extends React.Component {
  state = {
    form: {
      title: null,
      description: null,
      url: null,
      category: null,
    }
  }
  render() {
    return (
      <Grid.Column>
        <Form>
          <Form.Field>
            <Input
              label="Title"
              labelPosition="left"
              placeholder="Name your task"
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Description"
              labelPosition="left"
              placeholder="Description of the task"
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Url"
              labelPosition="left"
              placeholder="Link a website"
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="tag"
              search
              text="Select category"
            />
          </Form.Field>
          <Form.Field>
            <Button type="submit">Submit</Button>
          </Form.Field>
        </Form>
      </Grid.Column>
    );
  }
}
