// @flow
import type { Node, React } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { buildUrl } from '../../../core/utils/url';
import styles from './Anchor.style';

type Props = {
  to: string | any,
  as?: string,
  children: Node,
  noLink?: boolean,
  className: string,
  inheritedStyles?: string,
  handleLinkClick: (SyntheticEvent<>) => void,
  shallow?: boolean,
  scroll?: boolean,
  forceClick?: boolean,
};

const Anchor = ({
  children,
  to,
  as,
  className,
  noLink,
  inheritedStyles,
  handleLinkClick,
  shallow,
  scroll,
  forceClick,
  ...others
}: Props): Node => (noLink ? (
  <a href={buildUrl(to)} className={className} onClick={handleLinkClick} {...others}>
    {children}
  </a>
) : (
  <Link href={to} as={as} shallow={shallow} scroll={scroll}>
    {forceClick
      ? (
        <a className={className} onClick={handleLinkClick} {...others}>
          {children}
        </a>
      )
      : (
        <a className={className} {...others}>
          {children}
        </a>
      )}
  </Link>
));


Anchor.defaultProps = {
  noLink: false,
  as: '',
  inheritedStyles: '',
  shallow: false,
  scroll: false,
  forceClick: false,
};

export default styled(Anchor)`${styles}`;

export { Anchor as AnchorVanilla };
