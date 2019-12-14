// @flow
/**
 *
 * Accordion
 *
 */
import React, { useContext } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Accordion.style';
import type { AccordionHeaderProps, AccordionPanelProps, AccordionProps } from './types';

const AccordionContext = React.createContext('');
const AccordionPanel = ({ children, className, id }: AccordionPanelProps): Node => (
  <AccordionContext.Provider value={id}>
    <details className={className} id={id}>
      {children}
    </details>
  </AccordionContext.Provider>
);

AccordionPanel.defaultProps = {
  className: 'accordion-panel',
};

const AccordionHeader = ({ children, className, ariaLabelAttr }: AccordionHeaderProps): Node => {
  const accordionContext = useContext(AccordionContext);

  return (
    <summary
      className={className}
      role="button"
      aria-expanded="false"
      aria-label={ariaLabelAttr}
      aria-labelledby={accordionContext}
    >
      {children}
    </summary>
  );
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  ariaLabelAttr: 'aria-label',
};

AccordionPanel.header = AccordionHeader;

const Accordion = ({ className, children }: AccordionProps): Node => (
  <div className={className}>{children}</div>
);

Accordion.defaultProps = {
  className: 'accordion',
};

Accordion.panel = AccordionPanel;

export default styled(Accordion)`
  ${styles};
`;

export { Accordion as AccordionVanilla };
