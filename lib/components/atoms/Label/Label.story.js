// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Vanilla Component to display markup and props
import Label from './Label';
import Input from '../Input';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Label', 'Input'] })
  .addWithChapters('Label', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <>
                <Label htmlFor="userid">User Name </Label>
                <Input id="userid" name="userid" />
              </>
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
