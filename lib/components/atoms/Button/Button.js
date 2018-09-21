// @flow
import type { Node } from 'react';
import React from 'react';
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
  loader?: boolean,
  loaderPositionCenter?: boolean,
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
  loader,
  loaderPositionCenter,
  disabled,
  ariaLabel,
  ...others
}: Props): Node => (
  <button
    className={className}
    type={type}
    {...others}
    ref={elementRef}
    disabled={disabled || loader}
    aria-label={ariaLabel || null}
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
  loader: false,
  disabled: false,
  loaderPositionCenter: false,
  ariaLabel: '',
};

export default styled(Button)`${styles}`;
export { Button as ButtonVanilla };
