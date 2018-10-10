// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Vanilla Component to display markup and props
import Form from './Form';
import Button from '../../atoms/Button';
// Import Styled Component to showcase variations

storiesOf('Molecules', module).addWithChapters('Form', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <Form
              action="/"
              debug
              initialValues={{
                email: '',
                username: '',
                typeOfUser: '',
              }}
              handleSubmit={values => console.log(JSON.stringify(values))}
              validationSchema={{
                username: {
                  max: [4, 'Max reached'],
                  required: 'Required',
                },
                email: {
                  max: [4, 'Max reached'],
                  email: 'Invalid email',
                  required: 'Required',
                },
              }}
            >
              <div>
                <Form.Select
                  options={['Admin', 'Read Only']}
                  name="typeOfUser"
                  label="Type of user"
                />
                <Form.Input name="username" type="text" label="User Name" />
                <Form.Input type="email" name="email" label="Email" />
              </div>
              <Button primary type="submit">Submit</Button>
            </Form>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
  ],
});
