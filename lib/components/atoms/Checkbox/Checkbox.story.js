// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Atoms', module).addWithChapters('Checkbox', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <div>
              <Checkbox name="test_1" id="test_1" value="yes">Yes</Checkbox>
              <Checkbox name="test_2" id="test_2" value="defaultChecked" checked>Default Checked</Checkbox>
              <Checkbox name="test_3" id="test_3" value="disabled" disabled>Disabled</Checkbox>
            </div>
          ),
        },
        {
          sectionFn: () => (
            <div>
              <Checkbox name="test" id="test" showLabelBeforeInput value="yes">Yes</Checkbox>
              <br />
              <Checkbox name="test1" id="test1" showLabelBeforeInput value="defaultChecked" checked>Default Checked</Checkbox>
            </div>
          ),
        },
      ],
    },
  ],
});
