// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './FieldError.style';

type Props = {
  className: string,
  errorMessage?: string,
  dataSlnmId?: string,
  inheritedStyles?: string,
};

const FieldError = ({
  className,
  errorMessage,
  dataSlnmId,
  inheritedStyles,
  ...others
}: Props): Node =>
  errorMessage ? (
    <p
      className={className}
      aria-live="assertive"
      role="alert"
      data-slnm-id={dataSlnmId ? `${dataSlnmId}-error` : ''}
      {...others}
    >
      {errorMessage}
    </p>
  ) : null;

FieldError.defaultProps = {
  errorMessage: '',
  dataSlnmId: '',
  inheritedStyles: '',
};

export default styled(FieldError)`
  ${styles};
`;
export { FieldError as FieldErrorVanilla };
