// @flow
/**
 *
 * Accordian
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';
import styles from './Accordian.style';

import type { Props, State } from './types';

class Accordian extends PureComponent<Props, State> {
  static defaultProps = {};

  state: State = {
    isOpen: false,
  };

  toggleAccordianHandler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { accordianHeader, accordianBody, className } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={className}>
        <summary
          className={isOpen ? 'open' : 'closed'}
          onClick={this.toggleAccordianHandler}
          onKeyPress={this.toggleAccordianHandler}
          role="button"
          tabIndex="0"
        >
          {accordianHeader}
        </summary>
        {isOpen ? <p>{accordianBody}</p> : null}
      </div>
    );
  }
}

export default styled(Accordian)`
  ${styles};
`;

export { Accordian as AccordianVanilla };
