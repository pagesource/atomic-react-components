// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';

const CookieDisclaimer = ({
  acceptBtn,
  rejectBtn,
  className,
  children,
  contentWRTCTAButtons,
  marginBtnCls,
}: cookieDisclaimerProps) => {
  const { type, text } = acceptBtn;
  const { rbType, rbText } = rejectBtn;
  const [isVisible] = useState(true);

  const disclaimerElement = isVisible ? (
    <div className={className}>
      <Button tertiary onClick>
        <Icon id="close" />
      </Button>
      <div className={contentWRTCTAButtons}>
        {children}
        <Button inheritedStyles={marginBtnCls} {...type}>
          {text}
        </Button>
        <Button {...rbType}>{rbText}</Button>
      </div>
    </div>
  ) : null;

  return disclaimerElement;
};

CookieDisclaimer.defaultProps = {
  acceptBtn: {
    text: 'Accept',
  },
  rejectBtn: {
    rbText: 'Reject',
  },
  contentWRTCTAButtons: 'displayRow',
};

export default styled(CookieDisclaimer)`
  ${styles};
`;

export { CookieDisclaimer as CookieDisclaimerVanilla };
