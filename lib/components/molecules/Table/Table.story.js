import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Table.mock';

// Import Styled Component to showcase variations
import Table, { TableVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Table', 'TableVanilla'] })
  .add('CTA Knobs', () => <TableVanilla {...defaultConfig} isSubmitButton isCheckedBox />)
  .add('CTA', () => <Table {...defaultConfig} isCheckedBox />);
