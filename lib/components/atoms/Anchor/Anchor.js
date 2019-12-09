// @flow
import React from 'react';
import type { Node } from 'react';
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
  noLink: boolean,
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
  noLink,
  ...others
}: Props): Node => (
  <a
    href={buildUrl(to)}
    className={className}
    onClick={handleLinkClick}
    target={target}
    data-locator={elementLocator || `link-${getLabelFromChildren(children)}`}
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
  elementLocator: '',
  target: '',
  handleLinkClick: () => {},
};

export default styled(Anchor)`
  ${styles};
`;

export { Anchor as AnchorVanilla };

export type { Props as AnchorProps };
