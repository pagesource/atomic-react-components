import React, { useState, useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Props } from './types/index';

import styles, { StickyWrapper } from './StickyHeader.style';

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if (wrapperRef.current != null) {
      var offSetTop = wrapperRef.current.offsetTop;
    }
    return function() {
      if (wrapperRef.current != null) {
        setSticky(window.scrollY >= offSetTop);
      }
    };
  };

  useEffect(() => {
    const offSetTop = wrapperRef.current.offsetTop;
    window.addEventListener('scroll', handleScroll());
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  return (
    <StickyWrapper isSticky={isSticky} ref={wrapperRef}>
      <header className={`sticky-inner ${className}`}>{children}</header>
    </StickyWrapper>
  );
};

export default styled(StickyHeader)`
  ${styles}
`;

export { StickyHeader as StickyHeaderVanilla };
