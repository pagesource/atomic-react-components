// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldTextarea from '.';
import Form from '../Form';
import defaultTextareaForm from './FieldTextarea.mock';

storiesOf('Molecules', module)
  .addParameters({ jest: ['FieldTextarea', 'Form'] })
  .add('FieldTextarea Knobs', () => (
    <Form {...defaultTextareaForm}>
      <FieldTextarea
        id="comment"
        name="comment"
        label="Comment"
        placeholder="Enter your text here..."
      />
    </Form>
  ))
  .add('FieldTextarea', () => (
    <Form {...defaultTextareaForm}>
      <FieldTextarea
        id="comment"
        name="comment"
        label="Comment"
        placeholder="Enter your text here..."
      />
    </Form>
  ));
