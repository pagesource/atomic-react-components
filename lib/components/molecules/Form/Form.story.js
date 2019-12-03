// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  userFormProps,
  userFormSelectProps,
  fileMultipleInputProps,
  fileSingleInputProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormCommentProps,
  userFormAgeGroupProps,
  userFormTnCProps,
} from './Form.mock';

// Import Vanilla Component to display markup and props
import Form from './Form';
import Button from '../../atoms/Button';
// Import Styled Component to showcase variations

storiesOf('Molecules', module)
  .addParameters({ jest: ['Form', 'Button'] })
  .add('Form', () => (
    <Form {...userFormProps}>
      <div>
        <Form.Select {...userFormSelectProps} />
        <Form.Input {...userFormNameInputProps} />
        <Form.Input {...userFormEmailProps} />
        <Form.FieldFile {...fileMultipleInputProps} />
        <Form.FieldFile {...fileSingleInputProps} />
        <Form.DDFile {...fileSingleInputProps} />
        <Form.RadioGroup {...userFormAgeGroupProps} />
        <Form.Checkbox {...userFormTnCProps} />
        <Form.Textarea {...userFormCommentProps} />
      </div>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  ));
