import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Skeleton.mock';

// Import Styled Component to showcase variations
import Skeleton from '.';

storiesOf('Molecules/Skeleton', module)
  .addParameters({ jest: ['Skeleton', 'SkeletonVanilla'] })
  .add('Skeleton', () => (
    <Skeleton {...defaultConfig}>
      <Skeleton.shapes shapeType="basic"></Skeleton.shapes>
      <Skeleton.shapes shapeType="basic"></Skeleton.shapes>
      <Skeleton.shapes shapeType="circle"></Skeleton.shapes>
      <Skeleton.shapes shapeType="basic"></Skeleton.shapes>
      <Skeleton.shapes shapeType="basic"></Skeleton.shapes>
    </Skeleton>
  ));
