// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldTextarea from '.';
import Form from '../Form';
import defaultTextareaForm from './FieldTextarea.mock';

storiesOf('Molecules', module).addWithChapters('FieldTextarea', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <Form {...defaultTextareaForm}>
              <FieldTextarea
                id="comment"
                name="comment"
                label="Comment"
                placeholder="Enter your text here..."
              />
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
