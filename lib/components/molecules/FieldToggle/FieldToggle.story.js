import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import defaultCheckbox from './FieldToggle.mock';

// Import Styled Component to showcase variations
import FieldToggle, { FieldToggleVanilla } from '.';

storiesOf('Molecules/FieldToggle', module)
  .addParameters({ jest: ['FieldToggle', 'FieldToggleVanilla'] })
  .add('Knobs', () => <FieldToggleVanilla {...defaultCheckbox} />)
  .add('FieldToggle', () => <FieldToggle {...defaultCheckbox} />);
