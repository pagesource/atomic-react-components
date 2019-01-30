// @flow
/**
 *props detailed explanation
 *className - class for the popover wrapper
 *children - child nodes of the wrapper
 *body - The popover content
 *preferPlace - Sets a preference of where to position the Popover.
    valid values
      ->above|right|below|left: prefer an explicit side
      ->row|column: prefer an orientation
      ->start|end: prefer an order
      ->null - default, no preference, automatic resolution
  *place - ????
  *onOuterAction  - callback that executes every time user does an action
  *refreshIntervalMs  - time bet each poll in ms. Way to position target in DOM
  *enterExitTransitionDurationMs - time in ms that it takes to complete enter and exit animation default 500
  *tipSize : size of tip pointer, default 7
  *target  - React element to which popover orient itself
  *appendTarget - Where popover will mount into. Default is 'document.body'
*/
import type { Node } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import Popover from 'react-popover';
import styles from './Popover.style';

type Props = {
  className?: string,
  children: Node,
  body?: Node,
  isOpen: boolean,
  preferPlace: string | null,
  place: string | null,
  onOuterAction: (SyntheticEvent<>) => void,
  refreshIntervalMs: number,
  enterExitTransitionDurationMs: number,
  tipSize?: number,
  target: Node,
  appendTarget: Node,
};
type State = {
  popoverIsOpen: boolean,
};

class PopoverWrapper extends Component<Props, State> {
  static defaultProps = {
    className: '',
    body: 'test',
    tipSize: 5,
  };

  state = {
    popoverIsOpen: false,
  };

  props: Props;

  togglePopover() {
    this.setState(prevState => ({ popoverIsOpen: !prevState.popoverIsOpen }));
  }

  render() {
    const {
      preferPlace,
      place,
      body,
      refreshIntervalMs,
      enterExitTransitionDurationMs,
      tipSize,
      target,
      appendTarget,
      className,
      children,
    } = this.props;
    const { popoverIsOpen } = this.state;
    const popoverProps = {
      isOpen: popoverIsOpen,
      preferPlace,
      place,
      onOuterAction: () => this.togglePopover(),
      body,
      refreshIntervalMs,
      enterExitTransitionDurationMs,
      tipSize,
      target,
      appendTarget,
    };
    const targetToggleProps = {
      onClick: () => this.togglePopover(),
    };

    return (
      <Popover className={className} {...popoverProps}>
        <span {...targetToggleProps}>{children}</span>
      </Popover>
    );
  }
}

export default styled(PopoverWrapper)`
  ${styles};
`;
export { PopoverWrapper as PopoverWrapperVanilla };
