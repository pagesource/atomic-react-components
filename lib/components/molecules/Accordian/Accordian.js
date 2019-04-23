// @flow
/**
 *
 * Accordian
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';
import styles from './Accordian.style';
import classnames from 'classnames';
import type { Props, State } from './types';
import AccordianSection from './AccordianSection/AccordianSection';
import Header from './Header/Header';
import Body from './Body/Body';

class Accordian extends PureComponent<Props, State> {
  static Header = Header;
  static Body = Body;

  state: State = {
    openSections: {},
  };

  onClick = (label: string) => {
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
      <div className={classnames('wrapper', className)}>
        {children.map((child, index) => (
          <AccordianSection
            header={child}
            isOpen={openSections[child.props.label]}
            key={`Accordian-item-${index.toString()}`}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordianSection>
        ))}
      </div>
    );
  }
}

export default styled(Accordian)`
  ${styles};
`;

export { Accordian as AccordianVanilla };
