import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Tag.mock';

// Import Styled Component to showcase variations
import Tag, { TagVanilla } from '.';

storiesOf('Atoms/Tag', module)
  .addParameters({ jest: ['Tag', 'TagVanilla'] })
  .add('Tag Vanilla Default', () => <TagVanilla {...defaultConfig}>Tag Vanilla</TagVanilla>)
  .add('Tag Default', () => <Tag {...defaultConfig}>Tag Default</Tag>)
  .add('Tag Removable', () => (
    <Tag {...defaultConfig} variation="removable">
      Tag Removable
    </Tag>
  ));
