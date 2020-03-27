// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';

import { buildUrl } from '../../../core/utils/url';
import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Anchor.style';

type Props = {
  to: string | any,
  as?: string,
  children: Node,
  className?: string,
  elementLocator?: string,
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
  elementLocator,
  inheritedStyles,
  handleLinkClick,
  shallow,
  scroll,
  forceClick,
  target,
  ...others
}: Props): Node => (
  <a
    {...others}
    href={buildUrl(to)}
    className={className}
    onClick={handleLinkClick}
    target={target}
    data-locator={elementLocator || `link-${getLabelFromChildren(children)}`}
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
  elementLocator: '',
  target: '',
  handleLinkClick: () => {},
};

const StyledAnchor: ComponentType<Props> = styled(Anchor)`
  ${styles};
`;
export default StyledAnchor;

export { Anchor as AnchorVanilla };

export type { Props as AnchorProps };
