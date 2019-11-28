import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Search.mock';

// Import Styled Component to showcase variations
import Search, { SearchVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Search', 'SearchVanilla'] })
  .add('CTA Knobs', () => (
    <SearchVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('CTA', () => <Search {...defaultConfig} />);
