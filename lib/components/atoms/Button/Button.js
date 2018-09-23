// @flow
import * as React from 'react';
import styled from 'styled-components';

import styles from './Button.style';

type Props = {
  className: string,
  children: Node,
  inheritedStyles?: string,
  type?: string,
  primary?: boolean,
  secondary?: boolean,
  elementRef?: any => void,
  disabled?: boolean,
  ariaLabel?: string,
};

const Button = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  elementRef,
  disabled,
  ariaLabel,
  ...others
}: Props): Node => (
  <button
    aria-label={ariaLabel || null}
    className={className}
    disabled={disabled}
    ref={elementRef}
    type={type}
    {...others}
  >
    {children}
  </button>
);

Button.defaultProps = {
  inheritedStyles: '',
  type: 'button',
  primary: false,
  secondary: false,
  elementRef: undefined,
  disabled: false,
  ariaLabel: '',
};

export default styled(Button)`${styles}`;
export { Button as ButtonVanilla };
