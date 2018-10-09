// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   textInput,
//   textInputDisabled,
// } from './Form.mock';

// Import Vanilla Component to display markup and props
import Form from './Form';
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
              }}
              onSubmit={values => console.log(JSON.stringify(values))}
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
              <button type="submit">Submit</button>
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
    {
      title: 'Login form',
      sections: [
        {
          title: 'Default',
          sectionFn: () => (<div>Na</div>
          ),
        },
      ],
    },
  ],
});
