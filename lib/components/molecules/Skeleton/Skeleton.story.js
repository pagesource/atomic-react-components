import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { defaultConfig, circleConfig } from './Skeleton.mock';

// Import Styled Component to showcase variations
import Skeleton from '.';

storiesOf('Molecules/Skeleton', module)
  .addParameters({ jest: ['Skeleton', 'SkeletonVanilla'] })
  .add('Skeleton', () => (
    <Skeleton {...defaultConfig}>
      <Skeleton.line {...defaultConfig}></Skeleton.line>
      <Skeleton.line {...defaultConfig}></Skeleton.line>
      <Skeleton.circle {...defaultConfig}></Skeleton.circle>
      <Skeleton.circle {...circleConfig}></Skeleton.circle>
      <Skeleton.line {...defaultConfig}></Skeleton.line>
    </Skeleton>
  ));
