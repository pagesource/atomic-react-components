import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Track.mock';

// Import Styled Component to showcase variations
import Track, { TrackVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
storiesOf('Atoms', module)
  .addParameters({ jest: ['Track', 'TrackVanilla'] })
  .add('Track Knobs', () => <TrackVanilla {...defaultConfig} />)
  .add('Track', () => <Track {...defaultConfig} />);
