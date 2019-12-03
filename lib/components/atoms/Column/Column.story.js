import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Column.mock';

// Import Styled Component to showcase variations
import Column, { ColumnVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['Column', 'ColumnVanilla'] })
  .add('CTA Knobs', () => (
    <ColumnVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('CTA', () => <Column {...defaultConfig} />);
