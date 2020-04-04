// @flow
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import type { Node, ComponentType } from 'react';
import type { Props } from './types/index';
import useScroll from '../../../hooks/useScroll';

import styles, { Wrapper } from './StickyHeader.style';

const StickyHeader = ({ children, className, defaultTopHeight = 0, tag }: Props): Node => {
  const Tag = tag;
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => useScroll(wrapperRef, setSticky, defaultTopHeight));
    return () => {
      window.removeEventListener('scroll', useScroll);
    };
  });

  return (
    <Wrapper
      className={`${isSticky ? className : 'no-sticky'}`}
      ref={wrapperRef}
      elmRef={wrapperRef}
    >
      {tag ? (
        <Tag className="content">{children}</Tag>
      ) : (
        <header className="content">{children}</header>
      )}
    </Wrapper>
  );
};

const StyledStickyHeader: ComponentType<Props> = styled(StickyHeader)`
  ${styles};
`;

export default StyledStickyHeader;

export { StickyHeader as StickyHeaderVanilla };
