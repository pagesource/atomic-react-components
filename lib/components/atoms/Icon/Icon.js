// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import styles from './Icon.style';
import type { Props } from './types';
import theme from '../../../styles/themes/base';

const Icon = ({ className, title, id, ...others }: Props): Node => {
  return (
    <span role="presentation" className={classnames('icon-wrapper', className)} {...others}>
      <ReactSVG role="img" aria-label={title} className="svg-icon-wrapper" src={theme.icons[id]} />
    </span>
  );
};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };
