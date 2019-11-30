// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import defaultImage, { lazyLoadedImage, customImageLocator } from './Image.mock';
import Image, { ImageVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Image'] })
  .add('Image Knobs', () => <ImageVanilla {...defaultImage} />)
  .add('Image', () => <Image {...customImageLocator} />)
  .add('Image Lazy Load', () => <Image {...lazyLoadedImage} />);
