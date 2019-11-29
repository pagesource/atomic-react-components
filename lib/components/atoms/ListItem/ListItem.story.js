import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './ListItem.mock';

// Import Styled Component to showcase variations
import ListItem, { ListItemVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['ListItem', 'ListItemVanilla'] })
  .add('ListItem Knobs', () => (
    <ListItemVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('ListItem', () => <ListItem {...defaultConfig} />);
