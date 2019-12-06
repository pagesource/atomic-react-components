// @flow
/**
 *
 * Toast
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import styles from './Toast.style';
import type { Props } from './types';

const Toast = (props: Props): Node => {
  const [dummy, setDummy] = useState(true);

  useEffect(() => {
    // ... Use hooks
    setDummy(false);
  });

  return <div className={styles.default} dummy={dummy} {...props} />;
};

Toast.defaultProps = {};

export default styled(Toast)`
  ${styles};
`;

export { Toast as ToastVanilla };
