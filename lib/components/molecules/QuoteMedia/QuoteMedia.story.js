import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './QuoteMedia.mock';

// Import Styled Component to showcase variations
import QuoteMedia, { QuoteMediaVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({
    jest: ['QuoteMedia', 'QuoteMediaVanilla'],
  })
  .add('QuoteMedia', () => (
    <QuoteMediaVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('QuoteMedia', () => <QuoteMedia {...defaultConfig} />);
