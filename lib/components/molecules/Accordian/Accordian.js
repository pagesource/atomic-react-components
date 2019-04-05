// @flow
/**
 *
 * Accordian
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';

import { AccordianWrapper, AccordianHeader, AccordianBody } from './Accordian.style';
import type { Props, State } from './types';

class Accordian extends PureComponent<Props, State> {
  static defaultProps = {};

  state: State = {
    isOpen: false,
  };

  toggleAccordianHandler = () => {
    const doesShow = this.state.isOpen;
    this.setState({ isOpen: !doesShow });
  };

  render() {
    const { accordianHeader, accordianBody, className } = this.props;

    return (
      <AccordianWrapper>
        <AccordianHeader
          className={this.state.isOpen ? 'open' : 'closed'}
          onClick={this.toggleAccordianHandler}
        >
          {accordianHeader}
        </AccordianHeader>
        {this.state.isOpen ? <AccordianBody>{accordianBody}</AccordianBody> : null}
      </AccordianWrapper>
    );
  }
}

export default styled(Accordian)`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export { Accordian as AccordianVanilla };
