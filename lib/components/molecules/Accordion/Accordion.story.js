import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/named
import { defaultAccordion } from './Accordion.mock';

// Import Styled Component to showcase variations
import Accordion, { AccordionVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({
    jest: ['Accordion', 'AccordionVanilla'],
  })
  .add('Accordion Knobs', () => (
    <AccordionVanilla {...defaultAccordion} className={`${defaultAccordion.className}`} />
  ))
  .add('Accordion', () => <Accordion {...defaultAccordion} />);
