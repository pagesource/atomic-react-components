// @flow
/**
 *
 * ToolTip
 *
 */
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import styles from './Tooltip.style';
import type { Props } from './types';

class TooltipContainer extends PureComponent<Props> {
  el = typeof window !== 'undefined' ? document.createElement('div') : null;

  tooltipCont = null;

  componentDidMount() {
    this.tooltipCont = document.getElementById('tooltip');
    const { body } = document;
    if (!this.tooltipCont) {
      const container = document.createElement('div');
      container.setAttribute('id', 'tooltip');
      if (body) {
        body.appendChild(container);
        this.tooltipCont = container;
      }
    }
    if (this.el && this.tooltipCont) {
      this.tooltipCont.appendChild(this.el);
    }
    this.applyPosition();
  }

  componentWillUnmount() {
    if (this.tooltipCont && this.el) {
      this.tooltipCont.removeChild(this.el);
    }
  }

  applyPosition = () => {
    const styleElement = this.tooltipCont ? this.tooltipCont.style : null;
    if (styleElement && this.props.styles) {
      const { left, top, position } = this.props.styles;
      styleElement.left = `${left}px`;
      styleElement.position = position;
      styleElement.top = `${top}px`;
      styleElement.background = '#ddf';
    }
  };

  render() {
    const { children } = this.props;
    return this.el ? ReactDOM.createPortal(children, this.el) : null;
  }
}

export default styled(TooltipContainer)`
  ${styles};
`;
