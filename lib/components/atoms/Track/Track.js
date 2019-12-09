// @flow
/**
 *
 * Track
 *
 */
import React from 'react';
import type { Props } from './types';

const Track = ({ src, srcLang, id, label, isDefault, kind }: Props): Node => (
  <track src={src} default={isDefault} kind={kind} srcLang={srcLang} label={label} key={id} />
);

Track.defaultProps = {
  kind: 'subtitles',
};

export default Track;

export { Track as TrackVanilla };
