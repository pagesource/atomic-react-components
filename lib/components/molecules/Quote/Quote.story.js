// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Quote, { QuoteVanilla } from './Quote';
import { defaultQuote, noAuthorQuote, noCompanyQuote } from './Quote.mock'

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Quote', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <QuoteVanilla {...defaultQuote}
         
            />
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
      title: 'Quote with all fields',
      sections: [
        {
          title: 'With all fields',
          sectionFn: () => <Quote {...defaultQuote} />,
        },
        
      ],
    },
    {
      title: 'Quote without author',
      sections: [
        {
          title: 'No Author and company present',
          sectionFn: () => <Quote {...noAuthorQuote} />,
        },
        
      ],
    },
    {
      title: 'Quote without company',
      sections: [
        {
          title: 'No Company but author present',
          sectionFn: () => <Quote {...noCompanyQuote} />,
        },
        
      ],
    },
  ],
});
