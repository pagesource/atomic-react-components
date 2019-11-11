import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  defaultTextarea,
  disabledTextarea,
  textareaWithCustomElementLocator,
  textareaWithPlaceholder,
} from './Textarea.mock';

// Import Styled Component to showcase variations
import Textarea, { TextareaVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Textarea', 'TextareaVanilla'] })
  .addWithChapters('Textarea', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <TextareaVanilla id="textarea" name="textarea" className="hide-default-sample" />
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
        title: 'Textarea Variations',
        sections: [
          {
            title: 'Default Textarea',
            sectionFn: () => <Textarea {...defaultTextarea} />,
          },
          {
            title: 'Disabled Textarea',
            sectionFn: () => <Textarea {...disabledTextarea} />,
          },
          {
            title: 'Textarea with placeholder',
            sectionFn: () => <Textarea {...textareaWithPlaceholder} />,
          },
          {
            title: 'Textarea with custom Element Locator',
            sectionFn: () => <Textarea {...textareaWithCustomElementLocator} />,
          },
        ],
      },
    ],
  });
