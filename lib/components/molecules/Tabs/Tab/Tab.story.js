import React from 'react';
import { storiesOf } from '@storybook/react';

import { defaultActiveTab } from './Tab.mock';

// Import Styled Component to showcase variations
import Tab, { TabVanilla } from '.';

storiesOf('Molecules/Tab', module)
  .addParameters({ jest: ['Tab', 'TabVanilla'] })
  .add('Knobs', () => <TabVanilla {...defaultActiveTab} />)
  .add('Default', () => <Tab {...defaultActiveTab}>Tab 1</Tab>);
