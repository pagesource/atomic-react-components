import React from 'react';
import { storiesOf } from '@storybook/react';
import Para from '../../atoms/Para';
import Heading from '../../atoms/Heading';

// Import Styled Component to showcase variations
import Accordion from '.';

storiesOf('Molecules/Accordion', module)
  .addParameters({
    jest: ['Accordion', 'AccordionVanilla'],
  })
  .add('Accordion', () => (
    <Accordion>
      <Accordion.panel
        id="accordion-1"
        renderPanelBody={() => (
          <Para>
            The purpose of lorem ipsum is to create a natural looking block of text (sentence,
            paragraph, page, etc.) that does not distract from the layout. A practice not without
            controversy, laying out pages with meaningless filler text can be very useful when the
            focus is meant to be on design, not content.
          </Para>
        )}
      >
        <Accordion.panel.header>
          <Heading HeadingType="h3" style={{ display: 'inline-block' }}>
            Heading 1
          </Heading>
        </Accordion.panel.header>
      </Accordion.panel>
      <Accordion.panel
        renderPanelBody={() => (
          <Para>
            The purpose of lorem ipsum is to create a natural looking block of text (sentence,
            paragraph, page, etc.) that does not distract from the layout. A practice not without
            controversy, laying out pages with meaningless filler text can be very useful when the
            focus is meant to be on design, not content.
          </Para>
        )}
      >
        <Accordion.panel.header>
          <Heading HeadingType="h3" style={{ display: 'inline-block' }}>
            Heading 2
          </Heading>
        </Accordion.panel.header>
      </Accordion.panel>
    </Accordion>
  ));
