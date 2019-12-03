// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import { headingWithCustomLocator } from './Heading.mock';

import Heading, { HeadingVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Heading'] })
  .add('Heading Knobs', () => (
    <HeadingVanilla {...headingWithCustomLocator}>This is Heading text</HeadingVanilla>
  ))
  .add('Heading', () => <Heading {...headingWithCustomLocator}>This is Heading text</Heading>);
