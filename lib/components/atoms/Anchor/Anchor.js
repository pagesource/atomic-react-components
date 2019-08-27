// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import { buildUrl } from '../../../core/utils/url';
import styles from './Anchor.style';

type Props = {
  to: string | any,
  as?: string,
  children: Node,
  className?: string,
  inheritedStyles?: string,
  handleLinkClick?: (SyntheticEvent<>) => void,
  shallow?: boolean,
  scroll?: boolean,
  target?: '' | '_self' | '_blank' | '_parent' | '_top',
  forceClick?: boolean,
};

const Anchor = ({
  children,
  to,
  as,
  className,
  inheritedStyles,
  handleLinkClick,
  shallow,
  scroll,
  forceClick,
  target,
  ...others
}: Props): Node => (
  <a
    href={buildUrl(to)}
    className={className}
    onClick={handleLinkClick}
    target={target}
    {...others}
  >
    {children}
  </a>
);

Anchor.defaultProps = {
  as: '',
  inheritedStyles: '',
  shallow: false,
  scroll: false,
  forceClick: false,
  className: '',
  target: '',
  handleLinkClick: () => {},
};

export default styled(Anchor)`
  ${styles};
`;

export { Anchor as AnchorVanilla };

export type { Props as AnchorProps };
