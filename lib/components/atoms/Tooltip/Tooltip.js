// @flow
/**
 *
 * Tooltip
 *
 */
import { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import styles from './Tooltip.style';
import type { Props, State } from './types';

class Tooltip extends Component<Props, State> {
  static defaultProps = {
    message: '',
    position: '',
    className: '',
    tabIndex: '',
  };

  state: State = {
    displayTooltip: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        this.hideTooltip();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.hideTooltip);
  }

  hideTooltip = () => {
    this.setState({ displayTooltip: false });
  };

  showTooltip = () => {
    this.setState({ displayTooltip: true });
  };

  render() {
    const { message, position, className, children, tabIndex, ariaRole } = this.props;
    const { displayTooltip } = this.state;
    return (
      <div
        tabIndex={tabIndex}
        className={className}
        onMouseLeave={this.hideTooltip}
        onMouseOver={this.showTooltip}
        onBlur={this.hideTooltip}
        onFocus={this.showTooltip}
      >
        {displayTooltip && (
          <div className={classNames('tooltip-bubble', position)}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <span className="tooltip-trigger" role={ariaRole}>
          {children}
        </span>
      </div>
    );
  }
}

export default styled(Tooltip)`
  ${styles};
`;

export { Tooltip as TooltipVanilla };
