import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, vanillaDefaultConfig } from './Video.mock';

// Import Styled Component to showcase variations
import Video, { VideoVanilla } from '.';

storiesOf('Atoms/Video', module)
  .addParameters({ jest: ['Video', 'VideoVanilla'] })
  .add('Video Knobs', () => (
    <VideoVanilla {...vanillaDefaultConfig}>
      <Video.track {...vanillaDefaultConfig.trackdefaultdata} />
    </VideoVanilla>
  ))
  .add('Video', () => (
    <Video {...defaultConfig}>
      {defaultConfig.trackdata.map(caption => (
        <Video.track
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
