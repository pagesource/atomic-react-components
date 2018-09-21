// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  primaryButton,
  primaryButtonDisabled,
  secondaryButton,
  secondaryButtonDisabled,
} from './Button.mock';

// Import Vanilla Component to display markup and props
import { ButtonVanilla } from './Button';
// Import Styled Component to showcase variations
import Button from './index';

storiesOf('Atoms', module).addWithChapters('Buttons', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <ButtonVanilla {...primaryButton} className={`hide-default-sample ${primaryButton.className}`}>Submit</ButtonVanilla>,
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
      title: 'Primary Button Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Button {...primaryButton}>Submit</Button>,
        },
        {
          title: 'Disabled',
          sectionFn: () => <Button {...primaryButtonDisabled}>Submit</Button>,
        },
      ],
    },
    {
      title: 'Secondary Button Variations',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Button {...secondaryButton}>Submit</Button>,
        },
        {
          title: 'Disabled',
          sectionFn: () => <Button {...secondaryButtonDisabled}>Submit</Button>,
        },
      ],
    },
  ],
});
