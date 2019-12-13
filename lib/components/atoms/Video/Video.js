// @flow
/**
 *
 * Video
 *
 */
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './Video.style';
import Track, { TrackVanilla } from '../Track';
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
  ...others
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
      {...others}
    >
      <source src={src} type={`video/${src.substring(src.lastIndexOf('.') + 1)}`} />
      {children.length > 0 ? children : <Track {...defaultCaption} />}
    </video>
  );
};

Video.defaultProps = {
  width: '100%',
  height: 'auto',
  autoPlay: false,
  loop: false,
  muted: false,
  poster: '',
  controlsList: 'nodownload',
  defaultCaption: { src: '/', srcLang: 'en', label: 'English', id: 1, isDefault: true },
  className: 'video__container',
};

Video.track = Track;
Video.trackVanilla = TrackVanilla;

export default styled(Video)`
  ${styles};
`;

export { Video as VideoVanilla };
