import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { defaultCheckbox } from './Toggle.mock';

// Import Styled Component to showcase variations
import Toggle, { ToggleVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Toggle', 'ToggleVanilla'] })
  .add('Toggle knobs', () => <ToggleVanilla {...defaultCheckbox} />)
  .add('Toggle', () => <Toggle {...defaultCheckbox} />);
