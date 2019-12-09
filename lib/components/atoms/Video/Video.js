// @flow
/**
 *
 * Video
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Video.style';
import Track from '../Track';
import type { Props } from './types';

/* eslint-disable jsx-a11y/media-has-caption */

const Video = ({
  width,
  height,
  autoPlay,
  controls,
  loop,
  muted,
  poster,
  src,
  children,
  className,
  controlsList,
  defaultCaption,
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
      controlsList={controlsList}
    >
      <source src={src} type={`video/${src.substring(src.lastIndexOf('.') + 1)}`} />
      {children.length > 0 ? children : <Track {...defaultCaption} />}
    </video>
  );
};

Video.defaultProps = {
  width: '',
  height: '',
  autoPlay: false,
  controls: true,
  loop: false,
  muted: false,
  poster: '',
  src: 'http://techslides.com/demos/sample-videos/small.mp4',
  controlsList: '',
  defaultCaption: { src: '/', srcLang: 'en', label: 'English', id: 1, isDefault: true },
};

export default styled(Video)`
  ${styles};
`;

export { Video as VideoVanilla };
