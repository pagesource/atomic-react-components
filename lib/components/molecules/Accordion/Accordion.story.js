import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import { defaultAccordion } from './Accordion.mock';

// Import Styled Component to showcase variations
import Accordion, {
    AccordionVanilla
} from '.';

storiesOf('Molecules', module).addParameters({
    jest: ['Accordion', 'AccordionVanilla']
}).addWithChapters('Accordion', {
    chapters: [{
            sections: [{
                sectionFn: () => ( <
                    AccordionVanilla {
                        ...defaultAccordion
                    }
                    className = {
                        `${defaultAccordion.className}`
                    }
                    />
                ),
                options: {
                    showSource: true,
                    allowSourceToggling: true,
                    showPropTables: true,
                    allowPropTablesToggling: true,
                },
            }, ],
        },
        {
            title: 'Primary Accordion Variations',
            sections: [{
                title: 'Accordion',
                sectionFn: () =>
                    <Accordion { ...defaultAccordion }/>,
            }],
        },
    ],
});