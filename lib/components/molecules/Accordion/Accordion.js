/**
 *
 * Accordion
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Accordion.style';

const AccordionHeader = ({
  children,
  className,
  ariaLabel,
  accordionPanelId,
  isExpanded,
  toggleExpanded,
}) => {
  const handleClick = () => toggleExpanded(!isExpanded);
  const handleOnKeyPress = (event) => event.keyCode === 13 && toggleExpanded(!isExpanded);

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

AccordionHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  accordionPanelId: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  ariaLabel: 'Accordion Header',
};

/**
 * AccordionPanel
 *
 */
const AccordionPanel = ({ className, children, id, renderPanelBody }) => {
  const [isExpanded, toggleExpanded] = useState(false);
  const childrenWithHeaderProps = React.Children.map(children, (accordionHeader) => {
    if (accordionHeader.type.displayName === AccordionHeader.displayName)
      return React.cloneElement(accordionHeader, {
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

AccordionPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  renderPanelBody: PropTypes.func.isRequired,
};

AccordionPanel.defaultProps = {
  className: 'panel',
};

AccordionPanel.Header = AccordionHeader;

/**
 * Accordion
 */
const Accordion = ({ className, children }) => <div className={className}>{children}</div>;

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  className: 'accordion',
};

Accordion.Panel = AccordionPanel;
Accordion.Panel.Header = AccordionHeader;

const StyledAccordion = styled(Accordion)`
  ${styles};
`;

export default StyledAccordion;

export { Accordion as AccordionVanilla };
