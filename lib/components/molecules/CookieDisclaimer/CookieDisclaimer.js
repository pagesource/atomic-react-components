// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';
import useCookieDrop from '../../../hooks/useCookieDrop';

let [isVisible, setIsVisible] = [true, null];
const { setCookie } = useCookieDrop();

export const toggleIsVisibleState = () => {
  setIsVisible(!isVisible);
};

export const consentRejected = (cookieKey, expiryDays) => {
  setCookie(cookieKey, 'NO', expiryDays);
  toggleIsVisibleState();
};

export const consentAccepted = (cookieKey, expiryDays) => {
  setCookie(cookieKey, 'YES', expiryDays);
  toggleIsVisibleState();
};

const CookieDisclaimer = ({
  acceptBtn,
  rejectBtn,
  className,
  children,
  showDisclaimer,
  contentWRTButtons,
  cookieDetails,
  marginBtnCls,
}: cookieDisclaimerProps) => {
  const { text } = acceptBtn;
  const { rbText } = rejectBtn;
  [isVisible, setIsVisible] = useState(showDisclaimer);

  const disclaimerElement = isVisible ? (
    <div className={className} role="banner">
      <Button tertiary onClick={toggleIsVisibleState}>
        <Icon id="close" />
      </Button>
      <div className={contentWRTButtons}>
        {children}
        <div className="btnContainer">
          <Button
            inheritedStyles={marginBtnCls}
            primary
            onClick={() => consentAccepted(cookieDetails.cookieKey, cookieDetails.expiryDays)}
          >
            {text}
          </Button>
          <Button
            tertiary
            onClick={() => consentRejected(cookieDetails.cookieKey, cookieDetails.expiryDays)}
          >
            {rbText}
          </Button>
        </div>
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
  contentWRTButtons: 'displayRow',
  cookieDetails: {
    cookieKey: 'USER_CONSENT',
    expiryDays: 30,
  },
};

export default styled(CookieDisclaimer)`
  ${styles};
`;

export { CookieDisclaimer as CookieDisclaimerVanilla };
