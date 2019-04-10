// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Vanilla Component to display markup and props
import Label from './Label';
import Input from '../Input';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module).addWithChapters('Label', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <React.Fragment>
              <Label htmlFor="userid"> User Name </Label>
              <Input id="userid" name="userid" />
            </React.Fragment>
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
