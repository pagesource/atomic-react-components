import React, { useState, useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Props } from './types/index';

import styles from './StickyHeader.style';

const StickyHeader = ({ children, className }: Props): Node => {
  const [isSticky, setSticky] = useState(false);
  const wrapperRef = useRef(null);

  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleScroll = () => {
    if (wrapperRef.current != null) {
      setSticky(window.scrollY >= wrapperRef.current.offsetTop);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  return (
    <div className={`${isSticky ? className : ''}`} ref={wrapperRef}>
      <header>{children}</header>
    </div>
  );
};
