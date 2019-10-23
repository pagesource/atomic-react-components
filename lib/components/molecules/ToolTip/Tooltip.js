// @flow
import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import memoize from 'memoize-one';
import ReactDOM from 'react-dom';
import type { Props, State } from './types';

import styles from './Tooltip.style';
// type Ref = { current: null | Element };
type Ref = { current: any };
class Tooltip extends PureComponent<Props, State> {
  static defaultProps = {
    isOpen: false,
    topPos: 0,
    leftPos: 0,
  };

  state: State = {
    isOpen: false,
    topPos: 0,
    leftPos: 0,
  };

  documentTipElement: { current: null | HTMLElement } = createRef();

  tooltipCont = document.createElement('div');

  el = document.createElement('div');

  calculatePosition = memoize((left, top, height) => {
    const { body } = document;
    const topDocument =
      body && body.getBoundingClientRect() ? body.getBoundingClientRect() : { top: 0 };
    const containerWidth = body && body.clientWidth ? body.clientWidth : 0;
    const tooltipWidth = 200;
    let xAxis = left;
    if (xAxis + tooltipWidth > containerWidth) {
      xAxis = containerWidth - tooltipWidth - 2;
    }
    const yAxis = top - topDocument.top - height;
    this.setState({ topPos: yAxis, leftPos: xAxis });
  });

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
    this.tooltipCont = document.getElementById('tooltip');
    const { body } = document;
    if (!this.tooltipCont) {
      const container = this.el;
      container.setAttribute('id', 'tooltip');
      if (body) {
        body.appendChild(container);
        this.tooltipCont = container;
      }
    }
  }

  componentWillUnmount() {
    window.addEventListener('click', this.onClickOutsideHandler);
    const { body } = document;
    if (this.tooltipCont !== null) {
      body.removeChild(this.tooltipCont);
    }
  }

  onClickHandler = () => {
    const element = this.documentTipElement.current;
    const { left, top, height } =
      element && element.getBoundingClientRect()
        ? element.getBoundingClientRect()
        : { left: 0, top: 0, height: 20 };
    this.calculatePosition(left, top, height);
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  onClickOutsideHandler = (event: SyntheticEvent<any>) => {
    const { isOpen } = this.state;
    const el = event.target;
    const element = this.documentTipElement.current;
    if (isOpen && element && el instanceof Node && !element.contains(el)) {
      this.setState({ isOpen: false });
    }
  };

  closeHandler = () => {
    this.setState({ isOpen: false });
  };

  getToolTipComponent = () => {
    const { topPos, leftPos } = this.state;
    const { close, tootTipContent, className } = this.props;
    const closeElement = close && React.cloneElement(close, { onClick: this.closeHandler });

    const style = {
      top: `${topPos}px`,
      left: `${leftPos}px`,
    };
    return ReactDOM.createPortal(
      <div role="tooltip" className={classnames('tooltip-wrap', className)} style={style}>
        {typeof close !== 'undefined' ? (
          closeElement
        ) : (
          <button className="tooltip__close" onClick={this.closeHandler}>
            X
          </button>
        )}
        <div className="tooltip__body">{tootTipContent}</div>
      </div>,
      this.tooltipCont
    );
  };

  render() {
    const { isOpen } = this.state;
    const { trigger } = this.props;

    const triggerElement = trigger && React.cloneElement(trigger, { onClick: this.onClickHandler });

    return (
      <div ref={this.documentTipElement} role="presentation">
        {triggerElement}
        {isOpen && this.getToolTipComponent()}
      </div>
    );
  }
}

export default styled(Tooltip)`
  ${styles};
`;

export { Tooltip as TooltipVanilla };
