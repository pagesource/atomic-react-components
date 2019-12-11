import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTabs, verticalTabs } from './Tabs.mock';

// Import Styled Component to showcase variations
import Tabs, { TabsVanilla } from '.';

storiesOf('Molecules/Tabs', module)
  .addParameters({ jest: ['Tabs', 'TabsVanilla'] })
  .add('Knobs', () => <TabsVanilla {...defaultTabs} />)
  .add('Horizontal', () => <Tabs {...defaultTabs} />)
  .add('Vertical', () => <Tabs {...verticalTabs} />);
