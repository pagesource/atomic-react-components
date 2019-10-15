// @flow
/**
 *
 * Graph
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';

import styles from './Graph.style';
import type { Props } from './types';

class Graph extends PureComponent<Props> {
  static defaultProps = {};

  render() {
    return <div className={styles.default} />;
  }
}

export default styled(Graph)`
  ${styles};
`;

export { Graph as GraphVanilla };
