// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Icon.style';

type Props = {
  id: String,
  className?: String,
  width?: String,
  height?: String,
  title: String,
};

const Icon = ({ className, title, ...others }: Props): Node => {
  return (
    <span role="presentation" className={classnames('icon-wrapper', className)} {...others}>
      <i className="icon" aria-label={title} />
    </span>
  );
};

Icon.defaultProps = {
  width: '24px',
  height: '24px',
  className: '',
};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };

export type { Props as IconProps };
