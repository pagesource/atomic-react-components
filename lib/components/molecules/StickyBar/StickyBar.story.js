import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './StickyBar.mock';

// Import Styled Component to showcase variations
import StickyBar, { StickyBarVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['StickyBar', 'StickyBarVanilla'] })
  .add('CTA Knobs', () => (
    <StickyBarVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('CTA', () => (
    <StickyBar {...defaultConfig}>
      <li key={1}>hellosss</li>
      <li key={2}>hellosss</li>
      <div key={3}>hellosss</div>
    </StickyBar>
  ));
