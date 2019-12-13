// @flow
import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import type { cookieDisclaimerProps } from './types';
import styles from './CookieDisclaimer.style';

const CookieDisclaimer = ({ acceptBtn, rejectBtn, children }: cookieDisclaimerProps) => {
  const { type, text } = acceptBtn;
  const { rbType, rbText } = rejectBtn;

  return (
    <>
      <Button>Close</Button>
      <div>
        {children}
        <Button {...type}>{text}</Button>
        <Button {...rbType}>{rbText}</Button>
      </div>
    </>
  );
};

CookieDisclaimer.defaultProps = {
  acceptBtn: {
    text: 'Accept',
  },
  rejectBtn: {
    rbText: 'Reject',
  },
};

export default styled(CookieDisclaimer)`
  ${styles};
`;

export { CookieDisclaimer as CookieDisclaimerVanilla };
