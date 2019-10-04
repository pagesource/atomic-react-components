// @flow
/**
 *
 * ToolTip
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Tooltip.style';
import type { Props, Div } from './types';

const Tooltip = ({ tootTipContent, domElement, showImage, ...otherProps }: Props): Div => {
  return (
    <div
      className={otherProps.className}
      showImage={showImage}
      {...otherProps}
      data-tooltip={tootTipContent}
    >
      {domElement}
    </div>
  );
};

Tooltip.defaultProps = {
  className: '',
  showImage: false,
  'data-tooltip': 'text tool tip content',
};

export default styled(Tooltip)`
  ${styles};
`;

export { Tooltip as ToolTipGeneric };
