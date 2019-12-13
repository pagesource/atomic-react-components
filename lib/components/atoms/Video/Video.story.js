import React from 'react';
import { storiesOf } from '@storybook/react';
import {defaultConfig, vanillaDefaultConfig} from './Video.mock';

// Import Styled Component to showcase variations
import Video, { VideoVanilla } from '.';
import Track from '../Track/Track';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Video', 'VideoVanilla'] })
  .add('Video Knobs', () => (
    <VideoVanilla {...vanillaDefaultConfig}>
        <Track {...vanillaDefaultConfig.trackdefaultdata} />
    </VideoVanilla>
  ))
  .add('Video', () => (
    <Video {...defaultConfig}>
      {defaultConfig.trackdata.map(caption => (
        <Track
          src={caption.src}
          default={caption.isDefault}
          kind="subtitles"
          srcLang={caption.srcLang}
          label={caption.label}
          key={caption.id}
        />
      ))}
    </Video>
  ));
