// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Button.style';

type Props = {
  className?: string,
  children: Node,
  inheritedStyles?: string,
  type?: string,
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  disabled?: boolean,
  ariaLabel?: string,
  elementLocator?: string,
};

const Button = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  tertiary,
  disabled,
  ariaLabel,
  elementLocator,
  ...others
}: Props): Node => (
  <button
    aria-label={ariaLabel || null}
    className={className}
    disabled={disabled}
    type={type}
    data-locator={elementLocator || `button-${type}-${getLabelFromChildren(children)}`}
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
  tertiary: false,
  disabled: false,
  ariaLabel: '',
  className: '',
  elementLocator: '',
};

export default styled(Button)`
  ${styles};
`;
export { Button as ButtonVanilla };
