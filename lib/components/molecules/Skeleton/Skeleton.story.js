import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  defaultConfig,
  circleConfig,
  accordionConfig,
  tabsConfig,
  tabsContentConfig,
} from './Skeleton.mock';

// Import Styled Component to showcase variations
import Skeleton from '.';

storiesOf('Molecules/Skeleton', module)
  .addParameters({ jest: ['Skeleton', 'SkeletonVanilla'] })
  .add('Default Skeleton', () => (
    <Skeleton {...defaultConfig}>
      <Skeleton.bar {...defaultConfig}></Skeleton.bar>
      <Skeleton.bar {...defaultConfig}></Skeleton.bar>
      <Skeleton.circle {...defaultConfig}></Skeleton.circle>
      <Skeleton.circle {...circleConfig}></Skeleton.circle>
      <Skeleton.bar {...defaultConfig}></Skeleton.bar>
    </Skeleton>
  ))
  .add('Accordion Skeleton', () => (
    <Skeleton>
      <Skeleton.bar {...defaultConfig}></Skeleton.bar>
      <Skeleton.bar {...accordionConfig}></Skeleton.bar>
      <Skeleton.bar {...defaultConfig}></Skeleton.bar>
      <Skeleton.bar {...accordionConfig}></Skeleton.bar>
    </Skeleton>
  ))
  .add('Tabs Skeleton', () => (
    <Skeleton>
      <Skeleton.bar {...tabsConfig}></Skeleton.bar>
      <Skeleton.bar {...tabsConfig}></Skeleton.bar>
      <Skeleton.bar {...tabsContentConfig}></Skeleton.bar>
    </Skeleton>
  ));
