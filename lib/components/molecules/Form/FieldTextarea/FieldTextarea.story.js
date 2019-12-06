// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldTextarea from '.';
import Form from '../Form';
import defaultTextareaForm from './FieldTextarea.mock';

storiesOf('Molecules/FieldTextarea', module)
  .addParameters({ jest: ['FieldTextarea', 'Form'] })
  .add('Default', () => (
    <Form {...defaultTextareaForm}>
      <FieldTextarea
        id="comment"
        name="comment"
        label="Comment"
        placeholder="Enter your text here..."
      />
    </Form>
  ));
