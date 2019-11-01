// @flow
import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import memoize from 'memoize-one';
import ReactDOM from 'react-dom';
import type { Props, State } from './types';
import Image from '../../atoms/Image/Image';

import styles from './Overview.style';

class Overview extends PureComponent<Props, State> {
  documentTipElement: { current: HTMLElement } = createRef();

  documentPopUpElement: { current: HTMLElement } = createRef();

  calculatePosition = memoize((left, top) => {
    const { body } = document;
    const { maxHeight, maxWidth } = this.props;
    const topDocument =
      body && body.getBoundingClientRect() ? body.getBoundingClientRect() : { top: 0 };
    const containerWidth = body && body.clientWidth ? body.clientWidth : 0;
    let xAxis = left;
    if (xAxis + maxWidth > containerWidth) {
      xAxis = containerWidth - maxWidth;
    }
    let yAxis = top - topDocument.top;
    if (yAxis < 0) {
      yAxis = top + maxHeight;
    }
    this.setState({ topPos: yAxis, leftPos: xAxis });
  });

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      topPos: 0,
      leftPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler = () => {
    const { isOpen } = this.state;
    const element = this.documentTipElement.current;
    const { left, top } =
      element && element.getBoundingClientRect()
        ? element.getBoundingClientRect()
        : { left: 0, top: 0 };
    this.calculatePosition(left, top);
    this.setState({
      isOpen: !isOpen,
    });
  };

  onClickOutsideHandler = (event: SyntheticEvent<any>) => {
    const { isOpen } = this.state;
    const el = event.target;
    const element = this.documentTipElement.current;
    const OverviewElement = this.documentPopUpElement.current;

    if (
      isOpen &&
      element &&
      el instanceof Node &&
      !element.contains(el) &&
      !OverviewElement.contains(el)
    ) {
      this.setState({ isOpen: false });
    }
  };

  closeHandler = () => {
    this.setState({ isOpen: false });
  };

  getOverviewComponent = () => {
    const { image, textContent, className } = this.props;
    const { body } = document;
    const { topPos, leftPos } = this.state;
    const style = {
      top: `${topPos}px`,
      left: `${leftPos}px`,
    };
    return ReactDOM.createPortal(
      <div
        role="dialog"
        ref={this.documentPopUpElement}
        className={classnames('overview', className)}
        style={style}
      >
        {typeof image !== 'undefined' ? <Image {...image} /> : ''}
        <div className="overview__body">{textContent}</div>
      </div>,
      body
    );
  };

  render() {
    const { isOpen } = this.state;
    const { trigger } = this.props;

    const triggerElement = trigger && React.cloneElement(trigger, { onClick: this.onClickHandler });

    return (
      <div ref={this.documentTipElement} role="presentation">
        {triggerElement}
        {isOpen && this.getOverviewComponent()}
      </div>
    );
  }
}

Overview.defaultProps = {
  isOpen: false,
  topPos: 0,
  leftPos: 0,
};

export default styled(Overview)`
  ${styles};
`;

export { Overview as OverviewVanilla };
