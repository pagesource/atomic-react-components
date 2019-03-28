// @flow
/**
 *
 * Popover
 *
 */
import { PureComponent, createRef } from 'react';
import styled from 'styled-components';

import styles from './Popover.style';
import type { Props, State } from './types';

class Popover extends PureComponent<Props, State> {
  static defaultProps = {
    popOverBody: '',
    popOverHeader: '',
  };

  state: State = {
    showPopover: false,
  };

  wrapperRef: { current: null | HTMLDivElement } = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

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

  handleClick = () => {
    this.setState({
      showPopover: true,
    });
  };

  render() {
    const { popOverBody, popOverHeader, children } = this.props;
    const { showPopover } = this.state;
    return (
      <div role="presentation" onClick={this.handleClick} ref={this.wrapperRef}>
        {children}
        {showPopover && (
          <div role="dialog">
            <div>{popOverHeader}</div>
            <div>{popOverBody}</div>
          </div>
        )}
      </div>
    );
  }
}

export default styled(Popover)`
  ${styles};
`;

export { Popover as PopoverVanilla };
