// @flow
import React from 'react';
import type { Node } from 'react';
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
      className={className}
      aria-live="assertive"
      role="alert"
      data-slnm-id={dataSlnmId ? `${dataSlnmId}-error` : ''}
      data-locator={elementLocator || `field-error-${getLabelFromChildren(children)}`}
      {...others}
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

export default styled(FieldError)`
  ${styles};
`;

export { FieldError as FieldErrorVanilla };
