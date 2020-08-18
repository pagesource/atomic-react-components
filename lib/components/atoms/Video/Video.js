/**
 *
 * Video
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Video.style';
import Track, { TrackVanilla } from '../Track';

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
}) => {
  return (
    <video
      {...others}
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
      {children && children.length > 0 ? children : <Track {...defaultCaption} />}
    </video>
  );
};

Video.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool.isRequired,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlsList: PropTypes.string,
  defaultCaption: PropTypes.objectOf(PropTypes.object),
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

Video.Track = Track;
Video.TrackVanilla = TrackVanilla;

const StyledVideo = styled(Video)`
  ${styles};
`;
export default StyledVideo;

export { Video as VideoVanilla };
