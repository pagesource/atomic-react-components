// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  userFormProps,
  userFormSelectProps,
  // fileMultipleInputProps,
  // fileSingleInputProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormCommentProps,
  userFormAgeGroupProps,
  userFormTnCProps,
  // userFormToggleProps,
} from './Form.mock';

// Import Vanilla Component to display markup and props
import Form from './Form';
import Button from '../../atoms/Button';
// Import Styled Component to showcase variations

storiesOf('Molecules/Form', module)
  .addParameters({ jest: ['Form', 'Button'] })
  .add('Default', () => (
    <Form {...userFormProps}>
      <div>
        <Form.Select {...userFormSelectProps} />
        <Form.Input {...userFormNameInputProps} />
        <Form.Input {...userFormEmailProps} />
        <Form.RadioGroup {...userFormAgeGroupProps} />
        <Form.Checkbox {...userFormTnCProps} />
        <Form.Textarea {...userFormCommentProps} />
        {/* <Form.FieldFile {...fileMultipleInputProps} />
        <Form.FieldFile {...fileSingleInputProps} />
        <Form.DDFile {...fileSingleInputProps} />
        <Form.Toggle {...userFormToggleProps} /> */}
      </div>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  ));
