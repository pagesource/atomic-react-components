// @flow
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Props } from './types/index';
import useHandleScroll from '../../../../utils/util';

import styles, { Wrapper } from './StickyHeader.style';

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => useHandleScroll(wrapperRef, setSticky));
    return () => {
      window.removeEventListener('scroll', useHandleScroll);
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
