// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import {
  Accordion as ReactAccordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import styles from './Accordian.style';

type Props = {
  children: Node,
  accordionProps: Object,
};

class Accordion extends React.PureComponent<Props> {
  static Item = AccordionItem;

  static Title = AccordionItemTitle;

  static Body = AccordionItemBody;

  render() {
    const { accordionProps, children } = this.props;

    return <ReactAccordion {...accordionProps}>{children}</ReactAccordion>;
  }
}

export default styled(Accordion)`
  ${styles};
`;

export { Accordion as AccordionVanilla };
