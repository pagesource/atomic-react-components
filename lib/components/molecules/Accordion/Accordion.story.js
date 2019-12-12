import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/named
import { defaultAccordion } from './Accordion.mock';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

// Import Styled Component to showcase variations
import Accordion, { AccordionVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({
    jest: ['Accordion', 'AccordionVanilla'],
  })
  .add('Accordion Knobs', () => (
    <AccordionVanilla {...defaultAccordion} className={`${defaultAccordion.className}`} />
  ))
  .add('Accordion', () => (
    <Accordion {...defaultAccordion}>
      <Accordion.panel>
        <Accordion.panel.header>
          <Heading HeadingType="h3" style={{ display: 'inline-block' }}>
            Heading 1
          </Heading>
        </Accordion.panel.header>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Para>
      </Accordion.panel>
      <Accordion.panel>
        <Accordion.panel.header>
          <Heading HeadingType="h3" style={{ display: 'inline-block' }}>
            Heading 2
          </Heading>
        </Accordion.panel.header>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Para>
      </Accordion.panel>
    </Accordion>
  ));
