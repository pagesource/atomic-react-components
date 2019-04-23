// @flow
/**
 *
 * AccordianSection
 *
 */
import { PureComponent } from 'react';
import styled from 'styled-components';
import styles from './AccordianSection.style';
import type { Props } from './types';

class AccordianSection extends PureComponent<Props> {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, header, children },
    } = this;

    return (
      <div className="accordian">
        <summary
          onClick={onClick}
          aria-expanded={isOpen}
          className="accordian-item"
          ref={this.accordianRef}
        >
          {header}
        </summary>
        {isOpen ? <div className="accordian-panel">{children}</div> : null}
      </div>
    );
  }
}

export default styled(AccordianSection)`
  ${styles};
`;

export { AccordianSection as AccordianSectionVanilla };
