// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

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
  icon?: Boolean | String,
  iconImage?: String,
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
  icon,
  iconImage,
  ...others
}: Props): Node => (
  <button
    aria-label={ariaLabel || null}
    className={classnames(className, { 'icon icon-image': iconImage })}
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
  icon: false,
  iconImage: '',
};

export default styled(Button)`
  ${styles};
`;
export { Button as ButtonVanilla };
