// @flow
/**
 *
 * Accordian
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';
import AccordionSection from './AccordianSection.js';
import styles from './Accordian.style';
import type { Props, State } from './types';

class Accordian extends PureComponent<Props, State> {
  state: State = {
    openSections: {},
  };

  onClick = label => {
    const isOpen = this.state.openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen,
      },
    });
  };

  render() {
    const {
      onClick,
      props: { children, className },
      state: { openSections },
    } = this;

    return (
      <div>
        {children.map(child => (
          <AccordionSection
            isOpen={openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            className={className}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default styled(Accordian)`
  ${styles};
`;

export { Accordian as AccordianVanilla };
