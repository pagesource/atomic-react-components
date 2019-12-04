import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Video.mock';

// Import Styled Component to showcase variations
import Video, { VideoVanilla } from '.';
import { TrackVanilla } from '../Track/Track';

// TODO: indentation is not working fine in editor. Need to check for .hbs files

storiesOf('Atoms', module)
  .addParameters({ jest: ['Video', 'VideoVanilla'] })
  .add('Video Knobs', () => (
    <VideoVanilla {...defaultConfig}>
      {defaultConfig.trackData.map(caption => (
        <TrackVanilla renderProps={caption} />
      ))}
    </VideoVanilla>
  ))
  .add('Video', () => <Video {...defaultConfig} />);
