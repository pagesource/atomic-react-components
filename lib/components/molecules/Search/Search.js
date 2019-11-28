// @flow
/**
 *
 * Search
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import styles from './Search.style';
import type { Props } from './types';

const Search = (props: Props): Node => {
  const [dummy, setDummy] = useState(true);

  useEffect(() => {
    // ... Use hooks
    setDummy(false);
  });

  return <div className={styles.default} dummy={dummy} {...props} />;
};

Search.defaultProps = {};

export default styled(Search)`
  ${styles};
`;

export { Search as SearchVanilla };
