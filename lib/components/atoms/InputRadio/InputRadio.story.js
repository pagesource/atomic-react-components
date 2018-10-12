// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import InputRadio from './InputRadio';

storiesOf('Atoms', module).addWithChapters('InputRadio', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <div>
              <InputRadio name="test" value="yes">Yes</InputRadio>
              <InputRadio name="test" value="no">No</InputRadio>
              <InputRadio name="test" value="NA" disabled>Disabled</InputRadio>
            </div>
          ),
        },
        {
          sectionFn: () => (
            <div>
              <InputRadio name="test1" value="yes" checked><b>Yes</b></InputRadio>
              <InputRadio name="test1" value="no"><b>No</b></InputRadio>
            </div>
          ),
        },
      ],
    },
  ],
});
