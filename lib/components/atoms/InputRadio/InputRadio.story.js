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
              <InputRadio name="test" id="test_1" value="yes">Yes</InputRadio>
              <InputRadio name="test" id="test_2" value="no">No</InputRadio>
              <InputRadio name="test" id="test_3" value="NA" disabled>Disabled</InputRadio>
            </div>
          ),
        },
        {
          sectionFn: () => (
            <div>
              <InputRadio id="test_html_1" name="test1" value="yes" checked showLabelBeforeInput><b>Yes</b></InputRadio>
              <InputRadio id="test_html_2" name="test1" value="no" showLabelBeforeInput><b>No</b></InputRadio>
            </div>
          ),
        },
      ],
    },
  ],
});
