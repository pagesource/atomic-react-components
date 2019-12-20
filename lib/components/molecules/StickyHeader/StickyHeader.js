// @flow
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Props } from './types/index';
import useHandleScroll from '../../../../utils/util';

import styles from './StickyHeader.style';

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => useHandleScroll(wrapperRef, setSticky));
    return () => {
      window.removeEventListener('scroll', () => useHandleScroll);
    };
  });

  return (
    <div aria-label="Sticky Header" className={`${isSticky ? className : ''}`} ref={wrapperRef}>
      <header>{children}</header>
    </div>
  );
};

export default styled(StickyHeader)`
  ${styles}
`;

export { StickyHeader as StickyHeaderVanilla };
