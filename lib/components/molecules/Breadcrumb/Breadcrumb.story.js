import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Breadcrumb.mock';

// Import Styled Component to showcase variations
import Breadcrumb, { BreadcrumbVanilla } from '.';

storiesOf('Molecules/Breadcrumb', module)
  .addParameters({ jest: ['Breadcrumb', 'BreadcrumbVanilla'] })
  .add('Knobs ', () => <BreadcrumbVanilla {...defaultConfig} />)
  .add('Default', () => <Breadcrumb {...defaultConfig} />);
