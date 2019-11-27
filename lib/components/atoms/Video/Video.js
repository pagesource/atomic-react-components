// @flow
/**
 *
 * Video
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Video.style';
import type, { Props } from './types';

const Video = ({
  width,
  height,
  autoPlay,
  controls,
  loop,
  muted,
  poster,
  src,
  type,
  children,
}: Props): Node => {
  return (
    <video
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
    >
      <source src={src[0]} type={type[0]} />
      <source src={src[1]} type={type[1]} />
      {children}
    </video>
  );
};

Video.defaultProps = {
  width: '100%',
  height: '100%',
  autoPlay: false,
  loop: false,
  muted: false,
  poster: '',
  src: [
    'http://techslides.com/demos/sample-videos/small.mp4',
    'http://techslides.com/demos/sample-videos/small.ogv',
  ],
  type: ['video/mp4', 'video/ogg'],
  controls: true,
  children: <track src="/" default kind="subtitles" srcLang="en" label="English" />,
};

export default styled(Video)`
  ${styles};
`;

export { Video as VideoVanilla };
