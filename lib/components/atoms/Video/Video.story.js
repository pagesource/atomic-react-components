import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './Video.mock';

// Import Styled Component to showcase variations
import Video, { VideoVanilla } from '.';

storiesOf('Atoms', module)
  .addParameters({ jest: ['Video', 'VideoVanilla'] })
  .add('Video Knobs', () => (
    <VideoVanilla {...defaultConfig}>
      {defaultConfig.trackdata.map(caption => (
        <track
          src={caption.src}
          default
          kind="subtitles"
          srcLang={caption.srcLang}
          label={caption.label}
          key={caption.id}
        />
      ))}
    </VideoVanilla>
  ))
  .add('Video', () => (
    <Video {...defaultConfig}>
      {defaultConfig.trackdata.map(caption => (
        <track
          src={caption.src}
          default
          kind="subtitles"
          srcLang={caption.srcLang}
          label={caption.label}
          key={caption.id}
        />
      ))}
    </Video>
  ));
