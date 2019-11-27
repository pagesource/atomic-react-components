// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { primaryButton } from './Button.mock';
import Button, { ButtonVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Button'] })
  .add('CTA Knobs', () => (
    <ButtonVanilla {...primaryButton} className={primaryButton.className}>
      Submit
    </ButtonVanilla>
  ))
  .add('CTA', () => <Button {...primaryButton}>Submit</Button>);
/*
  .addWithChapters('Buttons', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ButtonVanilla
                {...primaryButton}
                className={`hide-default-sample ${primaryButton.className}`}
              >
                Submit
              </ButtonVanilla>
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
          {
            title: 'Custom Button element locator',
            sectionFn: () => <Button {...customButtonLocator}>Submit</Button>,
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
  }); */
