// @flow
import type { Node } from 'react';

export type AccordionProps = {
  className?: string,
  children: Node,
};

export type AccordionHeaderProps = {
  className?: string,
  children: Node,
  ariaLabel: string,
  accordionPanelId: string,
  isExpanded: Boolean,
  toggleExpanded: Function,
};

export type AccordionPanelProps = {
  className?: string,
  children: Node,
  id: string,
  renderPanelBody: Function,
};
