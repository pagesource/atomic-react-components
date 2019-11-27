// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line no-unused-vars
import FieldError, { FieldErrorVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['FieldError'] })
  .add('FieldError', () => <FieldError> Error message Styled </FieldError>);
/*   .addWithChapters('FieldError', {
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
  }); */
