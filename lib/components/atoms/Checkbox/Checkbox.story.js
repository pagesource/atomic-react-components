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
              <Checkbox name="test" value="yes">Yes</Checkbox>
              <Checkbox name="test" value="defaultChecked" checked>Default Checked</Checkbox>
              <Checkbox name="test" value="disabled" disabled>Disabled</Checkbox>
            </div>
          ),
        },
      ],
    },
  ],
});
