import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Breadcrumb.mock';

// Import Styled Component to showcase variations
import Breadcrumb, { BreadcrumbVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Breadcrumb', 'BreadcrumbVanilla'] })
  .add('Breadcrumb Knobs ', () => <BreadcrumbVanilla {...defaultConfig} />)
  .add('Breadcrumb', () => <Breadcrumb {...defaultConfig} />);
