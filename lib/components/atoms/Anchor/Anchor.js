// @flow
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { buildUrl } from '../../../core/utils/url';
import styles from './Anchor.style';

type Props = {
  to: string | any,
  as?: string,
  children: Node,
  noLink?: boolean,
  className: '',
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
        <div>
          <a className={className} onClick={handleLinkClick} {...others}>
            {children}
          </a>
        </div>
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
