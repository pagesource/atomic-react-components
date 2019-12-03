// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultImage, { lazyLoadedImage, customImageLocator } from './Image.mock';
import Image, { ImageVanilla } from '.';

storiesOf('Atoms/Image', module)
  .addParameters({ jest: ['Image'] })
  .add('Knobs', () => <ImageVanilla {...defaultImage} />)
  .add('Default', () => <Image {...customImageLocator} />)
  .add('Lazy Load', () => <Image {...lazyLoadedImage} />);
