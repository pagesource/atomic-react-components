// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldError, { FieldErrorVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('FieldError', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <FieldErrorVanilla> Error Message </FieldErrorVanilla>,
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
          sectionFn: () => <FieldError> Error message Styled </FieldError>,
        },
      ],
    },
  ],
});
