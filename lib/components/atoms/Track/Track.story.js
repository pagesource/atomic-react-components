import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Track.mock';

// Import Styled Component to showcase variations
import Track, { TrackVanilla } from '.';

storiesOf('Atoms/Track', module)
  .addParameters({ jest: ['Track', 'TrackVanilla'] })
  .add('Knobs', () => <TrackVanilla {...defaultConfig} />)
  .add('Track', () => <Track {...defaultConfig} />);
