import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
// eslint-disable-line
import { ReactComponent as IconClose } from '../../../static/images/close.svg';
import styles from './CookieDisclaimer.style';
import { setCookie, getCookie } from '../../../hooks/useCookieDrop';

let [isVisible, setIsVisible] = [
  true,
  (val) => {
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
export const consentRejected = (cookieDetails) => {
  setCookie('NO', cookieDetails);
  toggleIsVisibleState();
};

/**
 *
 * @param {Object} cookieDetails
 *
 * setting the value of the cookie when user consent is provided & performing corresponding action.
 */
export const consentAccepted = (cookieDetails) => {
  setCookie('YES', cookieDetails);
  toggleIsVisibleState();
};

/**
 *
 * @param {Object} cookieDetails
 *
 * reading the cookie value to conclude the initial state for showing up disclaimer or not.
 */
export const getShowDisclaimer = (cookieDetails) => {
  const showDisclaimer = getCookie(cookieDetails);
  return showDisclaimer === null;
};

const CookieDisclaimer = ({ acceptBtnText, rejectBtnText, className, children, cookieDetails }) => {
  const showDisclaimer = getShowDisclaimer(cookieDetails);
  [isVisible, setIsVisible] = useState(showDisclaimer);
  const disclaimerElement = isVisible ? (
    <div>
      <div className={className} role="alert">
        <Button tertiary onClick={toggleIsVisibleState} aria-label="close Cookie Disclaimer">
          <Icon title="close icon">
            <IconClose />
          </Icon>
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

CookieDisclaimer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  acceptBtnText: PropTypes.string,
  rejectBtnText: PropTypes.string,
  cookieDetails: PropTypes.objectOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
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

const StyledCookieDisclaimer = styled(CookieDisclaimer)`
  ${styles};
`;

export default StyledCookieDisclaimer;

export { CookieDisclaimer as CookieDisclaimerVanilla };
