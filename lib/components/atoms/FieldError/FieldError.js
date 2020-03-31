// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import Para from '../Para';
import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './FieldError.style';

type Props = {
  className?: string | void,
  children: Node,
  dataSlnmId?: string,
  inheritedStyles?: string,
  elementLocator?: string,
};

const FieldError = ({
  className,
  children,
  dataSlnmId,
  inheritedStyles,
  elementLocator,
  ...others
}: Props): Node => {
  return (
    <Para
      {...others}
      className={className}
      aria-live="assertive"
      role="alert"
      data-slnm-id={dataSlnmId ? `${dataSlnmId}-error` : ''}
      data-locator={elementLocator || `field-error-${getLabelFromChildren(children)}`}
    >
      {children}
    </Para>
  );
};

FieldError.defaultProps = {
  dataSlnmId: '',
  inheritedStyles: '',
  className: '',
  elementLocator: '',
};

const StyledFieldError: ComponentType<Props> = styled(FieldError)`
  ${styles};
`;

export default StyledFieldError;

export { FieldError as FieldErrorVanilla };
