// @flow
/**
 *
 * Accordian
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';
import type { Node } from 'react';
import styles from './Accordian.style';
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
    const { children, className, onClick } = this.props;
    return (
      <React.Fragment>
        <AccordianHeader onClick={this.toggleAccordianHandler} className={this.props.className}>
          Body Title
        </AccordianHeader>
        {this.state.isOpen ? (
          <AccordianBody className={this.props.className} onClick={this.toggleAccordianHandler}>
            Body Content
          </AccordianBody>
        ) : null}
      </React.Fragment>
    );
  }
}

const AccordianHeader = ({ className, onClick, children }: Props): Node => (
  <React.Fragment>
    <h2 className={className} onClick={onClick}>
      {children}
    </h2>
  </React.Fragment>
);

const AccordianBody = ({ className, onClick, children }: Props): Node => (
  <React.Fragment>
    <p className={className} onClick={onClick}>
      {children}
    </p>
  </React.Fragment>
);

export default styled(AccordianHeader)`
  ${styles};
`;

export { Accordian as AccordianVanilla };
