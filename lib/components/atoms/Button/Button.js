// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
  variation?: string,
  transparent?: boolean,
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
  variation,
  disabled,
  transparent,
  ariaLabel,
  elementLocator,
  ...others
}: Props): Node => (
  <button
    {...others}
    aria-label={ariaLabel || null}
    className={className}
    disabled={disabled}
    type={type}
    data-locator={
      elementLocator || (type ? `button-${type}-${getLabelFromChildren(children)}` : '')
    }
    variation={variation}
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
  variation: '',
  transparent: false,
  ariaLabel: '',
  className: '',
  elementLocator: '',
};

const StyledButton: ComponentType<Props> = styled(Button)`
  ${styles};
`;
export default StyledButton;

export { Button as ButtonVanilla };
