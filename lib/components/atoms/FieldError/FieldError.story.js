// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultMessage from './FieldError.mock';
import FieldError, { FieldErrorVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('FieldError', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <FieldErrorVanilla {...defaultMessage} className="hide-default-sample" />
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
      title: 'Input Field Error Message',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <FieldError {...defaultMessage} />,
        },
      ],
    },
  ],
});
