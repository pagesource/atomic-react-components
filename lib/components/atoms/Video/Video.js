// @flow
/**
 *
 * Video
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Video.style';
import type { Props } from './types';

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
  className,
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
      className={className}
    >
      <source src={src} type={type} />
      {children}
    </video>
  );
};

Video.defaultProps = {
  width: '100%',
  height: '100%',
  autoPlay: false,
  controls: true,
  loop: false,
  muted: false,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  type: 'video/mp4',
  children: <track src="/" default kind="subtitles" srcLang="en" label="English" />,
  className: '',
};

export default styled(Video)`
  ${styles};
`;

export { Video as VideoVanilla };
