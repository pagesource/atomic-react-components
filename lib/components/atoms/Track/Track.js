/**
 *
 * Track
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

const Track = ({ src, srcLang, id, label, isDefault, kind }) => (
  <track src={src} default={isDefault} kind={kind} srcLang={srcLang} label={label} key={id} />
);

Track.propTypes = {
  src: PropTypes.string.isRequired,
  srcLang: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDefault: PropTypes.bool.isRequired,
  kind: PropTypes.string,
};

Track.defaultProps = {
  kind: 'subtitles',
};

export default Track;

export { Track as TrackVanilla };
