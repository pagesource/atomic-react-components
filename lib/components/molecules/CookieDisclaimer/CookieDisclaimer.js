// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';

let [isVisible, setIsVisible] = [true, null];

export const toggleIsVisibleState = () => {
  setIsVisible(!isVisible);
};

export const consentAccepted = () => {
  // TO-DO: cookie Drop via some custom hook needs to be implemented.
  toggleIsVisibleState();
};

const CookieDisclaimer = ({
  acceptBtn,
  rejectBtn,
  className,
  children,
  showDisclaimer,
  contentWRTCTAButtons,
  marginBtnCls,
}: cookieDisclaimerProps) => {
  const { type, text } = acceptBtn;
  const { rbType, rbText } = rejectBtn;
  [isVisible, setIsVisible] = useState(showDisclaimer);

  const disclaimerElement = isVisible ? (
    <div className={className}>
      <Button tertiary onClick={toggleIsVisibleState}>
        <Icon id="close" />
      </Button>
      <div className={contentWRTCTAButtons}>
        {children}
        <Button inheritedStyles={marginBtnCls} {...type} onClick={consentAccepted}>
          {text}
        </Button>
        <Button {...rbType} onClick={toggleIsVisibleState}>
          {rbText}
        </Button>
      </div>
    </div>
  ) : null;

  return disclaimerElement;
};

CookieDisclaimer.defaultProps = {
  showDisclaimer: true,
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
