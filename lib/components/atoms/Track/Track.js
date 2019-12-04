// @flow
/**
 *
 * Track
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Track.style';
import type { Props } from './types';

const Track = ({ src, srcLang, label }: Props): Node => (
  <track src={src} default kind="subtitles" srcLang={srcLang} label={label} />
);

Track.defaultProps = {};

export default styled(Track)`
  ${styles};
`;

export { Track as TrackVanilla };
