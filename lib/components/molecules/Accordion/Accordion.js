// @flow
/**
 *
 * Accordion
 *
 */
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Accordion.style';
import type { AccordionHeaderProps, AccordionPanelProps, AccordionProps } from './types';

const AccordionHeader = ({ children, className }: AccordionHeaderProps): Node => (
  <summary className={className} id="accordion-item">{children}</summary>
);

AccordionHeader.defaultProps = {
  className: 'accordion-header',
};

const AccordionPanel = ({ children, className }: AccordionPanelProps): Node => (
  <details className={className} aria-labelledby="accordion-item">{children}</details>
);

AccordionPanel.defaultProps = {
  className: 'accordion-panel',
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
