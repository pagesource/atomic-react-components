import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useScroll from '../../../hooks/useScroll';

import styles, { Wrapper } from './StickyHeader.style';

const StickyHeader = ({ children, className, defaultTopHeight = 0, tag }) => {
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

StickyHeader.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  defaultTopHeight: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
};

const StyledStickyHeader = styled(StickyHeader)`
  ${styles};
`;

export default StyledStickyHeader;

export { StickyHeader as StickyHeaderVanilla };
