import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTextarea, disabledTextarea, textareaWithPlaceholder } from './Textarea.mock';

// Import Styled Component to showcase variations
import Textarea, { TextareaVanilla } from '.';

storiesOf('Atoms', module).addWithChapters('Textarea', {
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
      ],
    },
  ],
});
