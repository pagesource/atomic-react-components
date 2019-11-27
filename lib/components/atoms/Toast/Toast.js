// @flow
/**
 *
 * Toast
 *
 */
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Toast.style';

type Props = {
  className?: string,
  children: Node,
  inheritedStyles?: string,
  autoDismiss: Boolean,
  placement?: string,
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
};

const Toast = ({
  className,
  children,
  autoDismiss,
  placement,
  primary,
  secondary,
  tertiary,
}: Props): Node => (
  <div className={className} autoDismiss={autoDismiss} placement={placement}>
    {children}
  </div>
);

Toast.defaultProps = {
  children: 'Wow so easy !',
  className: '',
  inheritedStyles: '',
  autoDismiss: true,
  placement: '',
  primary: true,
  secondary: false,
  tertiary: false,
};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
