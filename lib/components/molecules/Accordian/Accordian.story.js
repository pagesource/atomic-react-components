import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Styled Component to showcase variations
import Accordion, { AccordionVanilla } from './Accordian';

const AccordionItem = Accordion.Item;
const AccordionItemTitle = Accordion.Title;
const AccordionItemBody = Accordion.Body;

storiesOf('Molecules', module).addWithChapters('Accordian', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <AccordionVanilla>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
                    Simple title
                    <div className="accordion__arrow" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                  <div>With a bit of description</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
            </AccordionVanilla>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
        {
          sectionFn: () => (
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3 className="u-position-relative">
                    Simple title
                    <div className="accordion__arrow" />
                  </h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                  <div>With a bit of description</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Primary Accordion Variations',
      sections: [
        {
          sectionFn: () => (
            <Accordion accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Simple title</h3>
                  <div>With a bit of description</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>Body content</p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
  ],
});
