// @flow
/**
 *
 * Popover
 *
 */
import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';

import { PopoverContentWrapper, PopoverContentClose } from './Popover.style';
import type { Props, State } from './types';

class Popover extends PureComponent<Props, State> {
  static defaultProps = {
    popOverBody: '',
    popOverHeader: '',
    isVisible: false,
    wrapperBackground: '',
  };

  /**
   * showPopover: State to manage the visibility of Popover content
   * default is false which can be changed by passing isVisible prop
   */
  state: State = {
    showPopover: false,
  };

  /**
   * wrapperRef: It represents the wrapper containing the element around
   * which popover needs to be wrapped and the popover content managed by
   * showPopover state or isVisible prop
   */
  wrapperRef: { current: null | HTMLDivElement } = createRef();

  /**
   * @componentDidMount
   * Add eventlistner to handle click outside the wrapper to that popover
   * gets closed and setting showPopover state on the basis of prop if passed
   */
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    const { isVisible } = this.props;
    this.setState({
      showPopover: isVisible,
    });
  }

  /**
   * @componentWillUnmount
   * Remove all event listener on component unmounting
   */
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * @handleClickOutside
   * @param {MouseEvent} e
   * This function handles the outside click from the wrapper
   * to close the popover if open
   */
  handleClickOutside = (e: MouseEvent) => {
    const el = e.target;
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      el instanceof Node &&
      !this.wrapperRef.current.contains(el)
    ) {
      this.setState({
        showPopover: false,
      });
    }
  };

  /**
   * @handleClick
   * This function handles the click of child element (like button/anchor etc)
   * on which popover needs to be open
   */
  handleClick = () => {
    this.setState({
      showPopover: true,
    });
  };

  /**
   * @close
   * This function closes the popover on when cross button
   * inside the popover gets clicked
   */
  close = () => {
    this.setState({
      showPopover: false,
    });
  };

  render() {
    const { popOverBody, popOverHeader, children, wrapperBackground } = this.props;
    const { showPopover } = this.state;

    /**
     * Cloning of element needs to be done so that handleClick function can
     * be wrapped around element without wrapping it around another element
     * or creating an extra DOM node
     */
    const element =
      children &&
      React.cloneElement(children, {
        onClick: this.handleClick,
      });
    return (
      <div role="presentation" ref={this.wrapperRef}>
        {element}
        {showPopover && (
          <PopoverContentWrapper wrapperBackground={wrapperBackground}>
            <div role="dialog">
              <h3>{popOverHeader}</h3>
              <div>{popOverBody}</div>
              <PopoverContentClose onClick={this.close}>X</PopoverContentClose>
            </div>
          </PopoverContentWrapper>
        )}
      </div>
    );
  }
}

export default styled(Popover)`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export { Popover as PopoverVanilla };
