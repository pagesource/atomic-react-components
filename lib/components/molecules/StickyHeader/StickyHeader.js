import React, { useState, useRef, useEffect, Fragment } from 'react';
import type, { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './StickyHeader.style';
import './StickyHeader.css';

type Props = {
  children: Node,
};

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`${classnames({ sticky: isSticky })} `} ref={ref}>
        <header className={`sticky-inner ${className}`}>{children}</header>
      </div>
    </Fragment>
  );
};

export default styled(StickyHeader)`
  ${styles}
`;

export { StickyHeader as StickyHeaderVanilla };
