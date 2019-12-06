import React from 'react';
import { storiesOf } from '@storybook/react';
import { textareaWithCustomElementLocator } from './Textarea.mock';

// Import Styled Component to showcase variations
import Textarea, { TextareaVanilla } from '.';

storiesOf('Atoms/Textarea', module)
  .addParameters({ jest: ['Textarea', 'TextareaVanilla'] })
  .add('Knobs', () => <TextareaVanilla id="textarea" name="textarea" />)
  .add('Default', () => <Textarea {...textareaWithCustomElementLocator} />);
