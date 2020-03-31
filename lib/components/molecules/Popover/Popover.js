// @flow
/**
 *
 * Popover
 *
 */
import React, { useState, useRef, useEffect } from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Popover.style';

type Props = {
  children: Node,
  className?: string,
  hidePopoverCloseBtn?: (SyntheticEvent<>) => void,
  trigger: any,
  isVisible?: boolean,
  popOverHeader: boolean,
};

const Popover = ({
  popOverHeader,
  children,
  hidePopoverCloseBtn,
  className,
  trigger,
  isVisible,
}: Props): Node => {
  /**
   * wrapperRef: It represents the wrapper containing the element around
   * which popover needs to be wrapped and the popover content managed by
   * showPopover state or isVisible prop
   */

  const [showPopover, setPopoverState] = useState(false);
  const wrapperRef: { current: any | HTMLDivElement } = useRef();

  /**
   * @handleClickOutside
   * @param {MouseEvent} e
   * This function handles the outside click from the wrapper
   * to close the popover if open
   */
  const handleClickOutside = (e: MouseEvent) => {
    const el = e.target;
    if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains((el: any))) {
      setPopoverState(false);
    }
  };

  /**
   * @componentDidMount
   * Add event listener to handle click outside the wrapper to that popover
   * gets closed and setting showPopover state on the basis of prop if passed
   */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    if (isVisible) {
      setPopoverState(isVisible);
    }
    /**
     * @componentWillUnmount
     * Remove all event listener on component un-mounting
     */
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, []);

  /**
   * @handleClick
   * This function handles the click of child element (like button/anchor etc)
   * on which popover needs to be open
   */
  const handleClick = () => {
    setPopoverState(true);
  };

  /**
   * @close
   * This function closes the popover on when cross button
   * inside the popover gets clicked
   */
  const close = () => {
    setPopoverState(false);
  };

  /**
   * Cloning of element needs to be done so that handleClick function can
   * be wrapped around element without wrapping it around another element
   * or creating an extra DOM node
   */
  const element = trigger && React.cloneElement(trigger, { onClick: handleClick });
  return (
    <div role="presentation" ref={wrapperRef} className={classnames('popover-wrap', className)}>
      {element}
      {showPopover && (
        <div role="dialog" className="popover">
          {!hidePopoverCloseBtn && (
            <button className="popover__close" onClick={close}>
              X
            </button>
          )}
          {popOverHeader && <h3 className="popover__header">{popOverHeader}</h3>}
          <div className="popover__body">{children}</div>
        </div>
      )}
    </div>
  );
};

Popover.defaultProps = {
  isVisible: false,
  className: '',
  hidePopoverCloseBtn: false,
};

const StyledPopover: ComponentType<Props> = styled(Popover)`
  ${styles};
`;

export default StyledPopover;

export { Popover as PopoverVanilla };
