// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  userFormProps,
  userFormSelectProps,
  fileMultipleInputProps,
  fileSingleInputProps,
  fileDDInputProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormCommentProps,
  userFormAgeGroupProps,
  userFormTnCProps,
  userFormToggleProps,
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
        <Form.Toggle {...userFormToggleProps} />
        <Form.FieldFile {...fileSingleInputProps} />
        <Form.FieldFile {...fileMultipleInputProps} />
        <Form.DDFile {...fileDDInputProps} />
      </div>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  ));
