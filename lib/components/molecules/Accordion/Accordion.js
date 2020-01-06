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
  isExpanded,
  toggleExpanded,
}: AccordionHeaderProps): Node => {
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
const AccordionPanel = ({
  className,
  children,
  id,
  renderPanelBody,
}: AccordionPanelProps): Node => {
  const [isExpanded, toggleExpanded] = useState(false);
  const childrenWithHeaderProps = React.Children.map(children, accordionheader => {
    if (accordionheader.type.displayName === AccordionHeader.displayName)
      return React.cloneElement(accordionheader, {
        accordionPanelId: id,
        toggleExpanded,
        isExpanded,
      });
    return false;
  });

  return (
    <details className={classnames('accordion-panel', className)} id={id}>
      {childrenWithHeaderProps}
      {renderPanelBody && (
        <div className={classnames('accordion-panel-content', className)} aria-hidden={!isExpanded}>
          {renderPanelBody()}
        </div>
      )}
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
