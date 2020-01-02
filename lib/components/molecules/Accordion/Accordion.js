// @flow
/**
 *
 * Accordion
 *
 */
import React, { useState } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Accordion.style';
import type { AccordionHeaderProps, AccordionPanelProps, AccordionProps } from './types';

const AccordionHeader = ({
  children,
  className,
  ariaLabel,
  accordionPanelId,
}: AccordionHeaderProps): Node => {
  const [isExpanded, toggleExpanded] = useState(false);

  const handleClick = () => toggleExpanded(!isExpanded);

  const handleOnKeyPress = event => event.keyCode === 13 && toggleExpanded(!isExpanded);

  return (
    <summary
      className={className}
      role="button"
      aria-expanded={isExpanded}
      aria-label={ariaLabel}
      aria-labelledby={accordionPanelId}
      onClick={handleClick}
      onKeyPress={handleOnKeyPress}
      tabIndex="0"
    >
      {children}
    </summary>
  );
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  ariaLabel: 'aria-label',
};

/**
 * AccordionPanel
 *
 */
const AccordionPanel = ({ className, children, id }: AccordionPanelProps): Node => {
  const [isHidden, toggleHidden] = useState(true);
  const isIE = false || !!document.documentMode;
  const [setActive, setActiveState] = useState('');
  const toggleAccordion = () => {
    if (isIE) setActiveState(setActive === '' ? 'active' : '');
    toggleHidden(!isHidden);
  };
  const childrenWithHeaderProps = React.Children.map(children, (accordionheader, i) => {
    if (accordionheader.type.displayName === AccordionHeader.displayName)
      return React.cloneElement(accordionheader, { accordionPanelId: id });

    if (i === 1)
      return (
        <div className={classnames('accordion-panel-content', className)} aria-hidden={isHidden}>
          {children[i]}
        </div>
      );
    return false;
  });

  return (
    <details
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={`accordion-panel ${setActive}`}
      id={id}
      onClick={toggleAccordion}
      onKeyPress={toggleAccordion}
    >
      {childrenWithHeaderProps}
    </details>
  );
};

AccordionPanel.defaultProps = {
  className: 'panel',
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
