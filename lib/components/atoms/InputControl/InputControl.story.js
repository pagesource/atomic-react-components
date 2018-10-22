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
          sectionFn: () => <InputControl type="radio" />,
        },
        {
          sectionFn: () => <InputControl type="radio" checked />,
        },
        {
          sectionFn: () => <InputControl type="radio" disabled />,
        },
        {
          sectionFn: () => <InputControl type="radio" checked disabled />,
        },
      ],
    },
    {
      title: 'Input Control - Checkbox',
      sections: [
        {
          sectionFn: () => <InputControl type="checkbox" />,
        },
        {
          sectionFn: () => <InputControl type="checkbox" checked />,
        },
        {
          sectionFn: () => <InputControl type="checkbox" disabled />,
        },
        {
          sectionFn: () => <InputControl type="checkbox" checked disabled />,
        },
      ],
    },
  ],
});
