// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  userFormProps,
  userFormSelectProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormAgeGroupProps,
  userFormTnCProps,
} from './Form.mock';

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
            <Form {...userFormProps}>
              <div>
                <Form.Select {...userFormSelectProps} />
                <Form.Input {...userFormNameInputProps} />
                <Form.Input {...userFormEmailProps} />
                <Form.RadioGroup {...userFormAgeGroupProps} />
                <Form.Checkbox {...userFormTnCProps} />
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
