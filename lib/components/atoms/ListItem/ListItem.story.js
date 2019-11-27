import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './ListItem.mock';

// Import Styled Component to showcase variations
import ListItem, { ListItemVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module)
  .addParameters({ jest: ['ListItem', 'ListItemVanilla'] })
  .add('CTA Knobs', () => (
    <ListItemVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('CTA', () => <ListItem {...defaultConfig} />);
