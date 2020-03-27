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
      <Skeleton.bar {...defaultConfig} />
      <Skeleton.bar {...defaultConfig} />
      <Skeleton.circle {...circleConfig} />
      <Skeleton.circle {...circleConfig} />
      <Skeleton.bar {...defaultConfig} />
    </Skeleton>
  ))
  .add('Accordion Skeleton', () => (
    <Skeleton>
      <Skeleton.bar {...defaultConfig} />
      <Skeleton.bar {...accordionConfig} />
      <Skeleton.bar {...defaultConfig} />
      <Skeleton.bar {...accordionConfig} />
    </Skeleton>
  ))
  .add('Tabs Skeleton', () => (
    <Skeleton>
      <div style={{ display: 'block', background: 'none', animation: 'none' }}>
        <Skeleton.bar {...tabsConfig} />
        <Skeleton.bar {...tabsConfig} />
      </div>
      <Skeleton.bar {...tabsContentConfig} />
    </Skeleton>
  ));
