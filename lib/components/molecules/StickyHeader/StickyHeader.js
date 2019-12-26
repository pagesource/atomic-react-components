// @flow
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Props } from './types/index';
import useScroll from '../../../hooks/useScroll';

import styles, { Wrapper } from './StickyHeader.style';

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => useScroll(wrapperRef, setSticky));
    return () => {
      window.removeEventListener('scroll', useScroll);
    };
  });

  return (
    <Wrapper
      aria-label="Sticky Header"
      className={`${isSticky ? className : 'no-sticky'}`}
      ref={wrapperRef}
      elmRef={wrapperRef}
    >
      <header>{children}</header>
    </Wrapper>
  );
};

export default styled(StickyHeader)`
  ${styles}
`;

export { StickyHeader as StickyHeaderVanilla };
