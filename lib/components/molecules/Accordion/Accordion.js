// @flow
/**
 *
 * Accordion
 *
 */
import React, { useState } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Accordion.style';
import type { AccordionHeaderProps, AccordionPanelProps, AccordionProps } from './types';

const AccordionHeader = ({
  children,
  className,
  ariaLabelAttr,
  accordionPanelId,
}: AccordionHeaderProps): Node => {
  const [ariaExpandedVal, toggleAriaExpandedOnClick] = useState(false);

  const handleClick = () => toggleAriaExpandedOnClick(!ariaExpandedVal);

  return (
    <summary
      className={className}
      role="button"
      aria-expanded={ariaExpandedVal}
      aria-label={ariaLabelAttr}
      aria-labelledby={accordionPanelId}
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex="0"
    >
      {children}
    </summary>
  );
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  ariaLabelAttr: 'aria-label',
};

/**
 * AccordionPanel
 *
 */
const AccordionPanel = ({ children, className, id }: AccordionPanelProps): Node => {
  const childrenWithProps = React.Children.map(children, accordionheader => {
    if (accordionheader.type.displayName === AccordionHeader.displayName)
      return React.cloneElement(accordionheader, { accordionPanelId: id });

    return React.cloneElement(accordionheader);
  });
  return (
    <details className={className} id={id}>
      {childrenWithProps}
    </details>
  );
};

AccordionPanel.defaultProps = {
  className: 'accordion-panel',
};

AccordionPanel.header = AccordionHeader;

/**
 * Accordion
 */
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
