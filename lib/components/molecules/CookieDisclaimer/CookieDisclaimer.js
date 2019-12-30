// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';
import useCookieDrop from '../../../hooks/useCookieDrop';

let [isVisible, setIsVisible] = [true, null];
const { setCookie, getCookie } = useCookieDrop();

export const toggleIsVisibleState = () => {
  setIsVisible(!isVisible);
};

export const consentRejected = cookieDetails => {
  setCookie('NO', cookieDetails);
  toggleIsVisibleState();
};

export const consentAccepted = cookieDetails => {
  setCookie('YES', cookieDetails);
  toggleIsVisibleState();
};

export const getShowDisclaimer = cookieDetails => {
  const showDisclaimer = getCookie(cookieDetails);
  return showDisclaimer === null;
};

const CookieDisclaimer = ({
  acceptBtnText,
  rejectBtnText,
  className,
  children,
  cookieDetails,
}: cookieDisclaimerProps) => {
  const showDisclaimer = getShowDisclaimer(cookieDetails);
  [isVisible, setIsVisible] = useState(showDisclaimer);

  const disclaimerElement = isVisible ? (
    <div className={className} role="banner">
      <Button tertiary onClick={toggleIsVisibleState}>
        <Icon id="close" />
      </Button>
      <div>{children}</div>
      <div>
        <Button primary onClick={() => consentAccepted(cookieDetails)}>
          {acceptBtnText}
        </Button>
        <Button tertiary onClick={() => consentRejected(cookieDetails)}>
          {rejectBtnText}
        </Button>
      </div>
    </div>
  ) : null;

  return disclaimerElement;
};

CookieDisclaimer.defaultProps = {
  acceptBtnText: 'Accept',
  rejectBtnText: 'Reject',
  cookieDetails: {
    cookieKey: 'USER_CONSENT',
    expiryDays: 365,
  },
};

export default styled(CookieDisclaimer)`
  ${styles};
`;

export { CookieDisclaimer as CookieDisclaimerVanilla };
