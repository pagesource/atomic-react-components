// @flow
import React, { useState } from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';
import { setCookie, getCookie } from '../../../hooks/useCookieDrop';

let [isVisible, setIsVisible] = [
  true,
  (val: any): any => {
    return val;
  },
];

/**
 * toggle the visible state of the popup.
 */
export const toggleIsVisibleState = () => {
  setIsVisible(!isVisible);
};

/**
 *
 * @param {Object} cookieDetails
 *
 * setting the value of the cookie when user consent is declined & performing corresponding action.
 */
export const consentRejected = (cookieDetails: any) => {
  setCookie('NO', cookieDetails);
  toggleIsVisibleState();
};

/**
 *
 * @param {Object} cookieDetails
 *
 * setting the value of the cookie when user consent is provided & performing corresponding action.
 */
export const consentAccepted = (cookieDetails: any) => {
  setCookie('YES', cookieDetails);
  toggleIsVisibleState();
};

/**
 *
 * @param {Object} cookieDetails
 *
 * reading the cookie value to conclude the initial state for showing up disclaimer or not.
 */
export const getShowDisclaimer = (cookieDetails: any) => {
  const showDisclaimer = getCookie(cookieDetails);
  return showDisclaimer === null;
};

const CookieDisclaimer = ({
  acceptBtnText,
  rejectBtnText,
  className,
  children,
  cookieDetails,
}: cookieDisclaimerProps): Node => {
  const showDisclaimer = getShowDisclaimer(cookieDetails);
  [isVisible, setIsVisible] = useState(showDisclaimer);
  const disclaimerElement = isVisible ? (
    <div>
      <div className={className} role="alert">
        <Button tertiary onClick={toggleIsVisibleState} aria-label="close Cookie Disclaimer">
          <Icon id="close" title="close" />
        </Button>
        <div>{children}</div>
        <ul>
          <li>
            <Button primary onClick={() => consentAccepted(cookieDetails)}>
              {acceptBtnText}
            </Button>
          </li>
          <li>
            <Button tertiary onClick={() => consentRejected(cookieDetails)}>
              {rejectBtnText}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  ) : null;

  return disclaimerElement;
};

CookieDisclaimer.defaultProps = {
  acceptBtnText: 'Accept',
  className: 'cookie-disclaimer',
  rejectBtnText: 'Reject',
  cookieDetails: {
    cookieKey: 'USER_CONSENT',
    expiryDays: 365,
  },
};

const StyledCookieDisclaimer: ComponentType<cookieDisclaimerProps> = styled(CookieDisclaimer)`
  ${styles};
`;

export default StyledCookieDisclaimer;

export { CookieDisclaimer as CookieDisclaimerVanilla };
