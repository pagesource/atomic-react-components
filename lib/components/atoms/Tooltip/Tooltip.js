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
  };

  state: State = {
    displayTooltip: false,
  };

  hideTooltip = () => {
    this.setState({ displayTooltip: false });
  };

  showTooltip = () => {
    this.setState({ displayTooltip: true });
  };

  render() {
    const { message, position, className, children } = this.props;
    const { displayTooltip } = this.state;
    return (
      <span className={className} onMouseLeave={this.hideTooltip}>
        {displayTooltip && (
          <div className={classNames('tooltip-bubble', position)}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={this.showTooltip} onFocus={this.showTooltip}>
          {children}
        </span>
      </span>
    );
  }
}

export default styled(Tooltip)`
  ${styles};
`;

export { Tooltip as TooltipVanilla };
