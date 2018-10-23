// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import Para from '../Para';

import styles from './FieldError.style';

type Props = {
  className?: string,
  children: Node,
  dataSlnmId?: string,
  inheritedStyles?: string,
};

const FieldError = ({
  className,
  children,
  dataSlnmId,
  inheritedStyles,
  ...others
}: Props): Node => (
  <Para
    className={className}
    aria-live="assertive"
    role="alert"
    data-slnm-id={dataSlnmId ? `${dataSlnmId}-error` : ''}
    {...others}
  >
    {children}
  </Para>
);

FieldError.defaultProps = {
  dataSlnmId: '',
  inheritedStyles: '',
  className: '',
};

export default styled(FieldError)`
  ${styles};
`;

export { FieldError as FieldErrorVanilla };
