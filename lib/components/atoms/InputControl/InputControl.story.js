// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Styled Component to showcase variations
import InputControl from './index';

storiesOf('Atoms', module).addWithChapters('InputControl', {
  chapters: [
    {
      title: 'Input Control - Radio',
      sections: [
        {
          sectionFn: () => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <InputControl type="radio" />
              <InputControl type="radio" checked />
              <InputControl type="radio" disabled />
              <InputControl type="radio" checked disabled />
            </div>
          ),
        },
      ],
    },
    {
      title: 'Input Control - Checkbox',
      sections: [
        {
          sectionFn: () => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <InputControl type="checkbox" />
              <InputControl type="checkbox" checked />
              <InputControl type="checkbox" disabled />
              <InputControl type="checkbox" checked disabled />
            </div>
          ),
        },
      ],
    },
  ],
});
