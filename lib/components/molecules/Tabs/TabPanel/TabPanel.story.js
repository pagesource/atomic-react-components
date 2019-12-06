import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { hiddenPanelConfig, selectedPanelConfig } from './TabPanel.mock';

// Import Styled Component to showcase variations
import TabPanel, { TabPanelVanilla } from '.';

storiesOf('Molecules/TabPanel', module)
  .addParameters({ jest: ['TabPanel', 'TabPanelVanilla'] })
  .add('Knobs', () => <TabPanelVanilla {...hiddenPanelConfig}>Tab panel content.</TabPanelVanilla>)
  .add('Default', () => <TabPanel {...selectedPanelConfig}>Tab panel content.</TabPanel>);
