/**
 *
 * Accordion
 *
 */
import React, { useState, useContext, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './Accordion.style';

const AccordionContext = React.createContext({});

const AccordionHeader = ({
  children,
  className,
  ariaLabel,
  accordionPanelId,
  isExpanded,
  disabled,
}) => {
  const { onToggle } = useContext(AccordionContext);

  const handleClick = (event) => {
    if (!disabled) {
      onToggle(accordionPanelId);
    }
    event.preventDefault();
  };

  const handleOnKeyPress = (event) => event.keyCode === 13 && onToggle(accordionPanelId);
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
      disabled={disabled}
      aria-disabled={disabled}
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
  disabled: PropTypes.bool,
};

AccordionHeader.defaultProps = {
  className: 'accordion-header',
  ariaLabel: 'Accordion Header',
  disabled: false,
};

/**
 * AccordionPanel
 *
 */
export const AccordionPanel = ({
  className,
  children,
  id,
  renderPanelBody,
  defaultExpanded,
  disabled,
}) => {
  const { activeId, setActiveId } = useContext(AccordionContext);

  useEffect(() => {
    if (defaultExpanded) {
      setActiveId(id);
    }
  }, [defaultExpanded]);

  const isExpanded = id === activeId;
  const childrenWithHeaderProps = React.Children.map(children, (accordionHeader) => {
    if (accordionHeader.type.displayName === AccordionHeader.displayName)
      return React.cloneElement(accordionHeader, {
        accordionPanelId: id,
        isExpanded,
        disabled,
      });
    return false;
  });

  return (
    <details
      className={classnames('accordion-panel', className)}
      id={id}
      open={isExpanded}
      disabled={disabled}
    >
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
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
};

AccordionPanel.defaultProps = {
  className: 'panel',
  defaultExpanded: false,
  disabled: false,
};

AccordionPanel.Header = AccordionHeader;

/**
 * Accordion
 */
const Accordion = ({ className, children }) => {
  const [activeId, setActiveId] = useState('');

  const onToggle = useCallback((id) => {
    setActiveId(id);
  });

  const context = {
    activeId,
    setActiveId,
    onToggle,
  };
  return (
    <AccordionContext.Provider value={context}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

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
