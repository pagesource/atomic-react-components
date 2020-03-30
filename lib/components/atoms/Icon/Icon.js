// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as IconEL } from '../../../static/images/close.svg';
import styles from './Icon.style';

type Props = {
  className?: String,
  fill?: String,
  width?: String,
  height?: String,
  title: String,
};

const Icon = ({ className, title, fill, ...others }: Props): Node => {
  return (
    <span role="presentation" className={classnames('icon-wrapper', className)} {...others}>
      <IconEL fill={fill} aria-label={title} />
    </span>
  );
};

Icon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#000',
  className: '',
};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };

export type { Props as IconProps };
